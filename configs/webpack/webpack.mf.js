const { ModuleFederationPlugin } = require('webpack').container;
const path = require("path");

const projectRoot = process.cwd();
const { dependencies: deps, version } = require(path.resolve(projectRoot, 'package.json'));

const libs = [
    'react',
    'react-dom',
    'react-router-dom',
    '@lkb2b/core-context',
    '@lkb2b/api-provider',
    '@lkb2b/ui-kit'
];

module.exports = ({ name, isCore = false, extraShared = {}, exposes, extraOptions = {} }) => new ModuleFederationPlugin({
    name,
    library: { type: 'var', name },
    shared: {
        ...libs.reduce((shared, moduleName) => Object.assign(shared, {
            [moduleName]: {
                eager: isCore,
                singleton: true,
                requiredVersion: deps[moduleName]
            }
        }), {}),
        ...extraShared,
    },
    filename: 'remoteEntry.js',
    exposes,
    ...extraOptions,
});
