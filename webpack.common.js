const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const json5 = require('json5');

module.exports = {
	entry: {
		app: './src/index.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Default Title from Config',
			filename: 'index.html',
			template: './src/template.html',
		}),
		new ESLintPlugin({
			extensions: ['js', 'jsx'],
			configType: 'flat',
			// config files specified here for visibility but not required
			// overrideConfigFile: path.resolve(__dirname, './.eslintrc.json'),
			overrideConfigFile: path.resolve(__dirname, './eslint.config.mjs'),
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg?g|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							fallback: 'file-loader',
						},
					},
				],
			},
			{
				test: /\.csv$/i,
				use: ['csv-loader'],
			},
			{
				test: /\.json5$/i,
				type: 'json',
				parser: {
					parse: json5.parse,
				},
			},
		],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
};
