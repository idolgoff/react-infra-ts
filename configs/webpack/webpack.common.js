const path = require("path");
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require("copy-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// use process.cwd() instead of path.join(__dirname, "../../");
const projectRoot = process.cwd();
const { version } = require(path.resolve(projectRoot, 'package.json'));

module.exports = (env) => {
    const envFilename = `.env.${env.env}` || '.env.dev';
    require('dotenv').config({ path: `./${envFilename}` });

    const PUBLIC_PATH = process.env.PUBLIC_PATH || '/';
    const IS_PROD = env.env === 'prod';

    return ({
        entry: {
            index: path.join(projectRoot, "src/index.ts"),
        },
        output: {
            path: path.join(projectRoot, "dist"),
            filename: `[name].${version}.[contenthash].bundle.js`,
            publicPath: PUBLIC_PATH,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: "ts-loader",
                },
                {
                    test: /\.scss|\.css$/,
                    use: [
                        {
                            loader: require.resolve("style-loader"),
                            options: { injectType: "singletonStyleTag" },
                        },
                        {
                            loader: require.resolve("css-loader"),
                            options: {
                                modules: {
                                    exportLocalsConvention: "camelCase",
                                    localIdentName: "[local]__[hash:base64:5]",
                                },
                            },
                        },
                        {
                            loader: require.resolve("postcss-loader"),
                            options: {
                                postcssOptions: {
                                    ident: "postcss",
                                    plugins: [require.resolve("autoprefixer")],
                                },
                            },
                        },
                        { loader: require.resolve("sass-loader") },
                    ],
                },
                // Treat src/css/app.css as a global stylesheet
                {
                    test: /\app.css$/,
                    use: ["style-loader", "css-loader", "postcss-loader"],
                },
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf|)$/,
                    type: 'asset/inline',
                },
                {
                    test: /\.svg$/,
                    issuer: /\.[jt]sx?$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    issuer: /\.s?css$/,
                    type: 'asset',
                    generator: {
                        filename: 'assets/images/[name].[hash][ext][query]'
                    }
                },
            ],
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    {
                        from: "./src/assets",
                        to: "./assets",
                        // Если вдруг нет ассетов, не страшно
                        noErrorOnMissing: true
                    },
                ],
            }),
            // dotenv-webpack wraps dotenv and Webpack.DefinePlugin
            // прокидывает в код process.env переменные
            new Dotenv({
                path: path.join(projectRoot, envFilename),
            }),
        ],
        // Setup @src path resolution for TypeScript files
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
            plugins: [
                new TsconfigPathsPlugin(),
            ],
        },
    })
};
