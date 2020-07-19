export default (githubRepos) => {
  return githubRepos.reduce((total, repo) => {
    let language = repo.language;
    if (!language) return total;
    if (!total[language]) {
      total[language] = {
        label: language,
        value: 1,
      };
    } else {
      total[language] = {
        ...total[language],

        value: total[language].value + 1,
      };
    }

    return total;
  }, {});
};
