const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Webpack = require('webpack')

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js',
		libraryTarget: 'umd'
	},

	devtool: 'inline-source-map',

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.tsx?$/,
				loader: 'babel-loader!ts-loader',
				exclude: /node_modules/
			},

			{
				test: /\.less$/,
				exclude: [/node_modules/],
				loaders: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
					'less-loader'
				]
			},
			{
				test: /\.less$/, // 配置除src外的less文件不打开cssModule
				exclude: [/src/],
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					{
						loader: 'less-loader',
						options: {
							// modifyVars: { '@primary-color': '#1DA57A' },
							javascriptEnabled: true
						}
					}
				]
			},
			// {
			// 	test: /\.css$/,
			// 	// exclude: /node_modules/,
			// 	loaders: [
			// 		'style-loader',
			// 		{
			// 			loader: 'css-loader',
			// 			options: {
			// 				modules: true
			// 			}
			// 		}
			// 	]
			// },
			{
				//CSS处理
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules',
				exclude: /node_modules/
			},

			{
				//antd样式处理
				test: /\.css$/,
				exclude: /src/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					}
				]
			}
		]
	},

	// 摇树
	// optimization: {
	// 	useExports: true
	// },

	resolve: {
		extensions: ['.tsx', '.js', '.jsx', '.css', '.less'],
		modules: ['node_modules']
	},

	externals: {
		// react: 'window.React',
		// 'react-dom': 'window.ReactDOM || window.React',
		// 'react-router': 'window.ReactRouter'
	},

	devServer: {
		contentBase: path.join(__dirname, '../dist'),
		port: 7777,
		hot: true,
		historyApiFallback: true,
		hotOnly: true
	},

	plugins: [
		new CleanWebpackPlugin(),

		new HtmlWebpackPlugin({
			title: 'Development',
			template: path.resolve(__dirname, '../public/index.html')
		}),

		new Webpack.HotModuleReplacementPlugin()
	]
}
