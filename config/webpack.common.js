/*global module */
/*global process */
/*global require */
/*global __dirname */
const merge = require('webpack-merge');
const common = require('../../../thing-engine/webpack.global.common.js');
const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');


let modulesFolder;
if(fs.existsSync(path.resolve(__dirname, '../node_modules/pixi.js/dist/pixi.min.js'))) {
	modulesFolder = path.resolve(__dirname, '../node_modules/');
} else {
	modulesFolder = path.resolve(__dirname, '../../../node_modules/');
}

let pixiDistPath;
let howlerPath;

if(process.argv.indexOf('debug') >= 0) { //debug build
	pixiDistPath = path.resolve(modulesFolder, 'pixi.js/dist/pixi.js');
	howlerPath = path.resolve(modulesFolder, 'howler/dist/howler.js');
} else {
	pixiDistPath = path.resolve(modulesFolder, 'pixi.js/dist/pixi.min.js');
	howlerPath = path.resolve(modulesFolder, 'howler/dist/howler.core.min.js');
}

module.exports = merge(common, {
	entry: ["babel-polyfill", 'webfontloader', './src/index.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../release')
	},
	plugins: [
		new CopyWebpackPlugin([
			'index.html',
			{ from:howlerPath, to: 'howler.core.js' },
			{ from:pixiDistPath, to: 'pixi.js' }
		])
	],
	resolve: {
		alias: {
			'src': path.resolve(__dirname, '../src')
		}
	}
});