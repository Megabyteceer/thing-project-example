/*global module */
/*global require */
/*global __dirname */
const merge = require('webpack-merge');
const common = require('thing-editor/scripts/webpack.global.common.js');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = merge(common, {
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../release')
	},
	plugins: [
		new CopyWebpackPlugin([
			'index.html'
		])
	],
	resolve: {
		alias: {
			'src': path.resolve(__dirname, '../src')
		}
	}
});