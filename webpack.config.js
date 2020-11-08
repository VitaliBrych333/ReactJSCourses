/* eslint-disable consistent-return */
/* eslint-disable global-require */
/* eslint-disable no-console */
const BUILD_DIR = `${__dirname}/dist`;
const APP_DIR = __dirname;

const configDirs = {
  BUILD_DIR,
  APP_DIR,
};

function buildConfig(env) {
  if (env === 'dev' || env === 'prod') {
    return require(`./webpack-settings/configEnv/${env}.js`)(configDirs);
  }
  console.log(
    "Wrong webpack build parameter. Possible choices: 'dev' or 'prod'."
  );
}

module.exports = buildConfig;
