/*global module */
/*global require */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	//entry: ['pixi.js/dist/pixi.js'],
	devtool: 'inline-source-map',
	devServer: {
		host: '127.0.0.1',
		disableHostCheck: true,
		port: 5050,
		inline: false,
		headers: {'Access-Control-Allow-Origin': '*'}
	}
});