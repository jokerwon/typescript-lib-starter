module.exports = {
    tabWidth: 4,
    printWidth: 100,
    singleQuote: true,
    semi: true,
    overrides: [
        {
            files: '*.json',
            options: {
                printWidth: 200,
            },
        },
    ],
    arrowParens: 'always',
};
