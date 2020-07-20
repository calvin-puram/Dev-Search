import React, { useState, useEffect, createContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

type Props = {
  children: React.ReactNode;
};

const GithubContext = createContext({
  githubUser: mockUser,
  githubRepos: mockRepos,
  githubFollowers: mockFollowers,
  requests: 60,
  error: { show: false, msg: "" },
  loading: false,
});

const GithubProvider = (props: Props) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [githubRepos, setGithubRepos] = useState(mockRepos);
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);
  const [requests, setRequest] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  const checkRequest = async () => {
    const req = await axios.get(`${rootUrl}/rate_limit`);
    const { remaining } = req.data.rate;
    setRequest(remaining);
    if (remaining === 0) {
      toggleError(true, "you have exceeded tour hourly limit!");
    }
  };

  const toggleError = (show: boolean, msg: string) => {
    setError({ show, msg });
  };

  const getGithubUser = async (user: string) => {
    toggleError(false, "");
    setLoading(true);
    checkRequest();
    try {
      const res = await axios.get(`${rootUrl}/users/${user}`);
      if (res.data) {
        setGithubUser(res.data);
        const { login, followers_url } = res.data;
        const repos = axios.get(`${rootUrl}/users/${login}/repos?per_page=100`);
        const followers = axios.get(`${followers_url}?per_page=100`);

        const prop = await Promise.all([repos, followers]);
        setGithubRepos(prop[0].data);
        setGithubFollowers(prop[1].data);
      }
    } catch (err) {
      if (err.response.data.message) {
        toggleError(true, "no user with that username");
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    checkRequest();
    // eslint-disable-next-line
  }, [requests]);
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        githubRepos,
        githubFollowers,
        requests,
        error,
        //@ts-ignore
        getGithubUser,
        loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
