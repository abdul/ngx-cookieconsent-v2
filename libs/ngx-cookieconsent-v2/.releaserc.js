const { createReleaseConfig } = require('../../tools/release');

module.exports = createReleaseConfig({
  projectName: 'ngx-cookieconsent-v2',
  projectRoot: 'libs/ngx-cookieconsent-v2',
  buildOutput: 'dist/libs/ngx-cookieconsent-v2',
});
