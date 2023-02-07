/**
 * LKB2B Infra module
 * @module @lkb2b/infra
 */

const stylelintConfig = require('./configs/stylelint');
const eslintConfig = require('./configs/eslint');
const commitlintConfig = require('./configs/commitlint');
const webpackConfig = require('./configs/webpack.config');
const webpackLibConfig = require('./configs/webpack.config.lib');
const webpackMfConfig = require('./configs/webpack/webpack.mf');

module.exports = {
    configs: {
        stylelint: stylelintConfig,
        eslint: eslintConfig,
        commitlint: commitlintConfig,
        webpack: webpackConfig,
        webpackLib: webpackLibConfig,
        webpackMf: webpackMfConfig,
    }
}