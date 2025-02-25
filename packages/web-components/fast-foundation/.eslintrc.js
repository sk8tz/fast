module.exports = {
    extends: ["@microsoft/eslint-config-fast-dna", "prettier"],
    rules: {
        "@typescript-eslint/class-name-casing": "off",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "typeLike",
                format: ["UPPER_CASE", "camelCase", "PascalCase"],
                leadingUnderscore: "allow",
            },
        ],
        "@typescript-eslint/ban-types": [
            "error",
            {
                types: {
                    "{}": false,
                    Function: false,
                    Object: false,
                },
                extendDefaults: true,
            },
        ],
    },
};
