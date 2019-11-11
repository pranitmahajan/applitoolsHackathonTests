module.exports = {
    rules: {
        'prefer-destructuring': 'warn',
        'class-methods-use-this': 'off',
        'global-require': 'off',
        'func-names': 'off',
        'import/prefer-default-export': 'off',
        'no-magic-numbers': [
            'error',
            {
                ignore: [1200, 800, 1, -1],
                ignoreArrayIndexes: true,
                enforceConst: true,
            },
        ],
    },
    globals: {
        browser: true,
        $: true,
        $$: true,
    },
    extends: ['airbnb-base', 'prettier'],
};
