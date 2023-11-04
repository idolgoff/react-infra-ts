const { configs } = require('react-infra-ts');
module.exports = configs.eslint({});

/**
 * You can configure it using spread syntax like this:
 */
// module.exports = configs.eslint({
//     ...configs.eslint(),
//     rules: {
//         ...configs.eslint().rules,
//         "react/react-in-jsx-scope": "off",
//     },
// });
