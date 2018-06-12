const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
	//entry: ['pixi.js/dist/pixi.js'],
    devtool: 'inline-source-map',
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 5050,
        publicPath: '/release/RocketDice',
        inline: false,
        headers: {'Access-Control-Allow-Origin': '*'},
        contentBase: false,
    }
});