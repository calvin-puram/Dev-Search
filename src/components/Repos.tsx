import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
import sumLanguages from "./utils/Languages.js";

const Repos = () => {
  const { githubRepos } = useContext(GithubContext);
  let languages = sumLanguages(githubRepos);
  languages = Object.values(languages)
    .sort((a: any, b: any) => b.value - a.value)
    .slice(0, 5);

  const chartData: { label: string; value: string }[] = [
    {
      label: "HTML",
      value: "20",
    },
    {
      label: "CSS",
      value: "13",
    },
    {
      label: "Javascript",
      value: "10",
    },
  ];
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={languages} />
        <div></div>
        <Doughnut2D data={chartData} />
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
