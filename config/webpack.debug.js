/*global module */
/*global require */
/*global __dirname */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

const mode = 'development';

module.exports = merge(common, {
	mode: mode,
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, '../debug')
	},
	optimization: {
		minimize: false
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(mode)
		})
	]
});