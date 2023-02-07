# React Infra - The Ultimate React Infrastructure Package

A comprehensive React infrastructure package for big-sized enterprise level applications, including all necessary modules and their configurations for React, TypeScript, Jest, Stylelint, ESLint, and Commitlint. 

[![NPM](https://img.shields.io/npm/v/react-infra-ts.svg)](https://www.npmjs.com/package/react-infra-ts)
[![License](https://img.shields.io/npm/l/react-infra-ts.svg)](https://github.com/idolgoff/react-infra-ts/blob/master/LICENSE)

## Key Features
- Robust React setup 
- TypeScript integration 
- Jest testing framework 
- Stylelint and ESLint for code linting 
- Commitlint for enforcing a conventional commit style 

## Quick Start

To use this package, all you need is an empty npm project. You can install the package by running the following command:

```bash
npm install react-infra
```

After installation, you can use the modules and configurations included in the package to set up a React application.

## How to use

### Webpack

You can use predefined webpack config or extend it with your own

Create a ```webpack.config.js``` file with followed

```javascript
const { configs } = require('react-infra');

module.exports = (env) => configs.webpack(env);
```

or

```javascript
const { configs } = require('react-infra');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const infraConfig = configs.webpack(env);
    const resultConfig = {
        ...infraConfig,
        plugins: [
            // predefined config rules
            ...infraConfig.plugins,

            // extend with own plugins using spread syntax
            new HtmlWebpackPlugin({
                template: 'src/index.html',

                // setting environment
                // with included DotEnv package
                BUILD_MODE: process.env.BUILD_MODE,
            }),
        ]
    }

    return resultConfig;
};
```

### TS config

Create `tsconfig.json` file as below:

```json
{
    "extends": "react-infra-ts/configs/tsconfig.json",
    "compilerOptions": {
        "baseUrl": "./",
        "rootDir": ".",
        "outDir": "dist"
    }
}
```

You have to specify baseUrl, rootDir and outDir here which comes relative to the default configuration file

### ESlint

You can use predefined eslint config or extend it with your own options using spread syntax. Create `.eslintrc.js` file with the followed content:

```javascript
const { configs } = require('react-infra');

module.exports = configs.eslint();
```

## Used Modules 
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [DotEnv](https://www.npmjs.com/package/dotenv/)
- [Jest](https://jestjs.io/)
- [Stylelint](https://stylelint.io/)
- [ESLint](https://eslint.org/)
- [Commitlint](https://commitlint.js.org/#/)

## Contributing

We welcome contributions to this project. If you have any suggestions or bug reports, please open an issue or a pull request.

## License

This project is licensed under the MIT license.
