const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')

const BaseWebpackConfig = require('./webpack.config.base.js')

module.exports = merge(BaseWebpackConfig, {
	entry:{
		main: path.resolve(__dirname, '../')  + '/src/main.js'
	},
	output:{
		path: path.resolve(__dirname, '../dist'),
		filename: './style/js/[name]-[hash:5].budle.js',
		publicPath: './'
	},
	plugins:[
		new HtmlPlugin({
			filename:'index.html',
			template:'./src/main.html',
			chunks:['main'],
			inject: 'body',
			title: 'i love i do'
		}),

		new ExtractTextPlugin({
			filename:'./style/css/[name]-[hash:5].css',
			allChunks: true
		})
	]
})