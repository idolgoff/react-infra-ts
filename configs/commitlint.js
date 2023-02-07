module.exports = (options = {}) => ({
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

                const subjectReg = /^(:\w+:\s)?[ЁА-ЯA-Z].*/
                if (subject && !subject.match(subjectReg))
                    return [false, `subject must be sentence-case`];

                const scopeReg = /LKB2B-(\d+)/;
                if (scope && !scope.match(scopeReg))
                    return [false, `scope must match ${scopeReg} regexp`];

                if (['feat', 'fix'].includes(type) && !scope)
                    return [false, `scope must be provided for type ${type}`];

                return [true];
            },
        ],
    },
});
