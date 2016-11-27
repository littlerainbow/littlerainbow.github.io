const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: ["./scripts/polyfill.min.js", "./scripts/fetch.js", "./scripts/common.js" ],
	output: {
		filename: "./dist/bundle.js"
	},
	module: {
	 loaders: [
	 {
	     test: /\.js$/,
	     exclude: /node_modules/,
	     loader: 'babel-loader',
	     query: {
	        presets: ['babel-preset-es2015-loose'] 
	     },
	 },
	 {
	 	test: /\.scss$/,
        loader: "style!css!autoprefixer!resolve-url!sass?sourceMap"
	 }],
	},
	// plugins: [
 //        new webpack.optimize.UglifyJsPlugin({
 //            compress: {
 //                warnings: false,
 //            },
 //            output: {
 //                comments: false,
 //            },
 //        })
 //    ],
    devServer: {
	    hot: true
	},
	devtool: 'source-map'
}