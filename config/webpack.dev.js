const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
	//entry: ['pixi.js/dist/pixi.js'],
    devtool: 'inline-source-map',
    devServer: {
        host: '127.0.0.1',
        disableHostCheck: true,
        port: 5050,
        contentBase: path.resolve(__dirname, './release/'),
        inline: false,
        headers: {'Access-Control-Allow-Origin': '*'},
        contentBase: false,
    }
});