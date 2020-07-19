import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
import { calLanguage, getStarsForked } from "./utils/Languages.js";

const Repos = () => {
  const { githubRepos } = useContext(GithubContext);
  const languages = calLanguage(githubRepos);
  const mostUsed = Object.values(languages)
    .sort((a: any, b: any) => b.value - a.value)
    .map((item: any) => {
      return { label: item.label, value: item.value };
    })
    .slice(0, 5);

  const mostStars = Object.values(languages)
    .sort((a: any, b: any) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      //@ts-ignore
      return { label: item.label, value: item.stars };
    })
    .slice(0, 5);

  // most forked and star repo
  let { forks, stars } = getStarsForked(githubRepos);
  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={mostUsed} />
        <Column3D data={stars} />
        <Doughnut2D data={mostStars} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
