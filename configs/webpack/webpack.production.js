const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require("./webpack.common.js");

module.exports = (env) => ({
    mode: "production",
    plugins: env.ANALYZE === 'true' ? [
        new BundleAnalyzerPlugin(),
    ] : [],
    optimization: {
        chunkIds: 'named',
        splitChunks: {
            chunks: 'all',
        },
    },
});
