const config = (options = {}) => ({
    extends: ["stylelint-config-standard-scss", "stylelint-config-clean-order"],
    plugins: ["stylelint-order"],
    rules: {
        indentation: 4,
        "declaration-empty-line-before": [
            "always",
            {
                except: ["first-nested"],
                ignore: [
                    "after-declaration",
                    "after-comment",
                    "inside-single-line-block",
                ],
            },
        ],
        "at-rule-empty-line-before": [
            "always",
            {
                ignore: ["first-nested", "blockless-after-same-name-blockless"],
            },
        ],
    },
    ...options,
});

module.exports = config;
