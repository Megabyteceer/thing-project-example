/*global module */
/*global require */
/*global __dirname */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '../debug')
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	]
});