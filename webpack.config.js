const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = env => {
	return {
		entry: {
			App: './src/index.mamba',
		},
		output: {
			path: path.resolve(__dirname, 'public/js/dist'),
			filename: '[name].[chunkhash].js' // '[name].[chunkhash].js' put this if you want to get hashed files to cache bust
		},
		module: {
			rules: [
				{
					test: /\.mamba$/,
					exclude: /node_modules/,
					use: ['mambascript-loader']
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin('public/js/dist', {}),
			new HtmlWebpackPlugin({
				inject: true,
				hash: true,
				template: './src/index.html',
				children: false,
				filename: '../../index.html'
			}),
			new WebpackMd5Hash()
		],
		optimization: {
			splitChunks: {
				chunks: 'all',
				minSize: 0
			},
			usedExports: true,
			sideEffects: true
		}
	};
};
