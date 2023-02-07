/**
 * CommitLint config options object
 * @typedef {Object} CommitlintOptions
 * @property {RegExp} subjectRegExp - subject RegExp
 * @property {RegExp} scopeRegExp - scope RegExp
*/
module.exports = ({ scopeRegExp, subjectRegExp } = {}) => ({
    extends: ["@commitlint/config-conventional"],
    plugins: ['commitlint-plugin-function-rules'],
    rules: {
        'scope-enum': [0], // level: disabled
        'subject-max-length': [2, 'always', 72],
        'subject-case': [2, 'always', 'sentence-case'],
        'function-rules/scope-enum': [
            2, // level: error
            'always',
            ({ type, scope, subject }) => {

                if (!!subjectRegExp && subject && !subject.match(subjectRegExp))
                    return [false, `subject must be ${subjectRegExp} case`];

                if (!!scopeRegExp && scope && !scope.match(scopeRegExp))
                    return [false, `scope must match ${scopeRegExp} regexp`];

                if (['feat', 'fix'].includes(type) && !scope)
                    return [false, `scope must be provided for type ${type}`];

                return [true];
            },
        ],
    },
});
