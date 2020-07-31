const BUILD_DIR = __dirname + '/dist';
const APP_DIR = __dirname;

const configDirs = {
  BUILD_DIR: BUILD_DIR,
  APP_DIR: APP_DIR
}

function buildConfig(env) {
  if (env === 'dev' || env === 'prod') {
    return require('./configEnv/' + env + '.js')(configDirs);
  } else {
    console.log("Wrong webpack build parameter. Possible choices: 'dev' or 'prod'.")
  }
}

module.exports = buildConfig;
