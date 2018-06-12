const merge = require('webpack-merge');
const common = require('thing-engine/webpack.global.common.js');
const path = require('path');


module.exports = merge(common, {
    entry: ['./src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../release')
    },
    resolve: {
		alias: {
			'src': path.resolve(__dirname, '../src')
		}
    }
});
