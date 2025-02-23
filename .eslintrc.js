module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'jest',
	],
	env: {
		es6: true,
		'jest/globals': true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'@typescript-eslint/explicit-member-accessibility': [
			'error', { 'accessibility': 'no-public' },
		],
		'@typescript-eslint/indent': ['error', 'tab'],
	},
};
