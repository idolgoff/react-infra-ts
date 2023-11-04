const path = require('path');

const projectRoot = process.cwd();

module.exports = (env) => ({
    mode: "development",
    devtool: "inline-source-map",
    plugins: [],
    infrastructureLogging: {
        debug: [name => name.includes('webpack-dev-server')],
    },
    devServer: {
        static: {
            directory: path.join(projectRoot, 'src/assets'),
            publicPath: '/assets',
        },
        compress: true,
        port: 9000,
        historyApiFallback: {
            index: '/index.html'
        },
    }
});
