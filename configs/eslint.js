/**
 * ESlint config options object
 * @typedef {Object} ESlintOptions
 * @property {string} parser - eslint parser
 * @property {string[]} extends - eslint extends
 * @property {Object} parserOptions - eslint parserOptions
 * @property {Array.<string|Object>} plugins - eslint plugins
 * @property {string[]} ignorePatterns - eslint plugins
 * @property {Object>} rules - eslint plugins
 * @property {Object>} settings - eslint plugins
 */

/**
 * ESlint config with options
 * @param {ESlintOptions} options
 * @returns ESlintOptions
 */
module.exports = (options = {}) => ({
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    plugins: ["import", "@typescript-eslint/tslint"],
    ignorePatterns: ['*lint*.js', '*webpack*.js', "*.snap"],
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        "quotes": ["error", "single"],
        "react/display-name": 0,
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/tslint/config": [
            "error",
            {
              "rules": {
                "ordered-imports": [
                  true,
                  {
                    "module-source-path": "full",
                    "grouped-imports": true,
                    "import-sources-order": "lowercase-first",
                    "groups": [
                      {
                        "match": "^react",
                        "order": 1
                      },
                      {
                        "name": "Components",
                        "match": "^@components\/",
                        "order": 20
                      },
                      {
                        "name": "Pages",
                        "match": "^@pages\/",
                        "order": 30
                      },
                      {
                        "name": "Hooks",
                        "match": "^@hooks\/",
                        "order": 40
                      },
                      {
                        "name": "Utils",
                        "match": "^@utils\/",
                        "order": 70
                      },
                      {
                        "name": "Parent directory",
                        "match": "^[.][.]",
                        "order": 80
                      },
                      {
                        "name": "Current directory",
                        "match": "^[.]",
                        "order": 90
                      },
                      {
                        "name": "Vendors & Packages",
                        "match": "^[^\\.]",
                        "order": 10
                      }
                    ]
                  }
                ]
              }
            }
          ],
    },
    settings: {
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use
            version: "detect", 
        },
    },
    ...options,
});
