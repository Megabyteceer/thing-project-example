/*global module */
/*global require */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

const mode = 'production';

module.exports = merge(common, {
	mode: mode,
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(mode)
		})
	]
});