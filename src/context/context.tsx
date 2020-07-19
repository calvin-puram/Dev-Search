import React, { useState, useEffect, createContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

type Props = {
  children: React.ReactNode;
};

export type StateValue = {
  githubUser: object;
  githubRepos: any[];
  githubFollowers: any[];
};

const GithubContext = createContext({
  githubUser: mockUser,
  githubRepos: mockRepos,
  githubFollowers: mockFollowers,
  requests: 60,
});

const GithubProvider = (props: Props) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [githubRepos, setGithubRepos] = useState(mockRepos);
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);
  const [requests, setRequest] = useState(0);

  const checkRequest = async () => {
    const req = await axios.get(`${rootUrl}/rate_limit`);
    const { remaining } = req.data.rate;
    setRequest(remaining);
    if (remaining === 0) {
      //throw error
    }
  };

  useEffect(() => {
    checkRequest();
  }, []);
  return (
    <GithubContext.Provider
      value={{ githubUser, githubRepos, githubFollowers, requests }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
