const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {

		module:{
			rules:[
				{	
					test:/\.vue$/,
					use:[
							{loader:'vue-loader', 
								options: {
		                            loaders: {
		                                less: ExtractTextPlugin.extract({
		                                    use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
		                                    fallback: 'vue-style-loader'
		                                }),
		                                css: ExtractTextPlugin.extract({
		                                    use: ['css-loader', 'autoprefixer-loader', 'less-loader'],
		                                    fallback: 'vue-style-loader'
		                                })
		                            }
	                        	}
	                    	},
							                  
	                        {loader: 'iview-loader',
	                        	options: {
	                            	prefix: false
	                        	}
	                        }
	                    ]
				},
				{
	                test: /iview\/.*?js$/,
	                loader: 'babel-loader'
	            },
				{
					test:/\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/
				},
	            {
	                test: /\.css$/,
	                use: ExtractTextPlugin.extract({
	                    use: ['css-loader?minimize', 'autoprefixer-loader'],
	                    fallback: 'style-loader'
	                })
	            },
	         	{
	                test: /\.less/,
	                use: ExtractTextPlugin.extract({
	                    use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
	                    fallback: 'style-loader'
	                })
	            },
				{
					test:/\.(eot|svg|ttf|woff|woff2)/,
					loader: 'file-loader',
					options:{
						name: 'assets/fonts/[name]-[hash:5].[ext]',
						publicPath: '../../'
					}
				},
				{
					test:/\.(gif|jpg|png)\??.*$/,
					use:[
							{
								loader:'url-loader',
								options:{
									name:'assets/images/[name]-[hash:5].[ext]',
									limit: 8192,
									publicPath: '../../'
								}
							}
						]
				}
			]
		},

		plugins:[

			// 删除文件以及目录
			new CleanPlugin(['dist'], {
					// 根目录
					root: path.resolve(__dirname, '../'),
					// 开启在控制台输出信息    
					varbose: true,
					// 启用删除文件    　
					dry: false
				}),

	        // 给js，css 首页加上说明 
			new webpack.BannerPlugin('欢迎翻版，翻版必究')
		]
}