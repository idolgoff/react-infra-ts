const { merge } = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common.js');

module.exports = (envVars, options = {}) => {
  const { env } = envVars;
  const envConfig = require(`./webpack/webpack.${env}.js`);
  const config = merge(commonConfig(envVars), envConfig(envVars), options);
  return config;
}
