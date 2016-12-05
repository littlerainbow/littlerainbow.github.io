const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || 'development';


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
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract(['css!autoprefixer?browsers=last 2 versions', 'sass'])
	 }],
	},

	plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        //     output: {
        //         comments: false,
        //     }
        // }),
        new ExtractTextPlugin("./dist/css/common.css")
    ],
    devServer: {
	    hot: true
	},
	devtool: 'source-map'
}