import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
	pluginJs.configs.recommended,
	{
		languageOptions: {
			globals: globals.browser,
		},
	},
	{
		plugins: {
			prettier: eslintPluginPrettier,
		},
	},
	{
		rules: {
			...eslintConfigPrettier.rules,
			'prettier/prettier': 'error',
			'no-unused-vars': 'error',
			'no-undef': 'error',
		},
	},
];
