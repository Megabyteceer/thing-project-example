const merge = require('webpack-merge');
const common = require('../../../thing-engine/webpack.global.common.js');
const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let pixiDistPath = path.resolve(__dirname, '../node_modules/pixi.js/dist/pixi.min.js');
if(!fs.existsSync(pixiDistPath)) {
	pixiDistPath = path.resolve(__dirname, '../../../node_modules/pixi.js/dist/pixi.min.js');
}

module.exports = merge(common, {
    entry: ['./src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../release')
    },
	plugins: [
        new CopyWebpackPlugin([
			'index.html',
			{ from:pixiDistPath, to: 'pixi.min.js' }
		])
    ],
    resolve: {
		alias: {
			'src': path.resolve(__dirname, '../src')
		}
    }
});
