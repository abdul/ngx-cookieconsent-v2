const { getJestProjects } = require('@nrwl/jest');

export default {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/ngx-cookieconsent-v2-demo',
    '<rootDir>/libs/ngx-cookieconsent-v2',
  ],
};
