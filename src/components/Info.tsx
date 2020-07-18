import React, { useContext } from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import InfoItem from "./InfoItem";

export type Items = {
  id: number;
  icon: JSX.Element;
  label: string;
  value: number;
  color: string;
};

const Info: React.FC = () => {
  const { githubUser } = useContext(GithubContext);
  const { public_repos, public_gists, followers, following } = githubUser;

  const items: Items[] = [
    {
      id: 1,
      icon: <GoRepo className='icon' />,
      label: "repos",
      value: public_repos,
      color: "pink",
    },

    {
      id: 2,
      icon: <FiUsers className='icon' />,
      label: "followers",
      value: followers,
      color: "green",
    },

    {
      id: 3,
      icon: <FiUserPlus className='icon' />,
      label: "following",
      value: following,
      color: "purple",
    },

    {
      id: 4,
      icon: <GoGist className='icon' />,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        {items.map((item) => {
          //@ts-ignore
          return <InfoItem item={item} key={item.id} />;
        })}
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
`;

export default Info;
