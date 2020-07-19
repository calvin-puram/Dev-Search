export const calLanguage = (githubRepos) => {
  return githubRepos.reduce((total, repo) => {
    let { language, stargazers_count } = repo;
    if (!language) return total;
    if (!total[language]) {
      total[language] = {
        label: language,
        value: 1,
        stars: stargazers_count,
      };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }

    return total;
  }, {});
};

export const getStarsForked = (githubRepos) => {
  return githubRepos.reduce(
    (total, repo) => {
      const { stargazers_count, name, forks } = repo;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      forks: {},
      stars: {},
    }
  );
};
