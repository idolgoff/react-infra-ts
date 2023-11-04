const { configs } = require('react-infra-ts');

module.exports = {
    ...configs.jest,
    coveragePathIgnorePatterns: ['/node_modules/', '/models/'],
};
