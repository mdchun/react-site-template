const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Webpack = require('webpack')

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, '../src/app.tsx'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},

	optimization: {
		minimize: false,
		namedModules: true
	},

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
							modules: true,
							importLoaders: 1,
							localIndexName: '[name]__[local]___[hash:base64:5]'
						}
					},

					{
						loader: 'less-loader',
						options: {
							importLoaders: 2,
							modules: true
						}
					}
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
							modules: true,
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
		react: {
			root: 'React',
			commonjs2: 'react',
			commonjs: 'react',
			amd: 'react'
		},
		'react-dom': {
			root: 'ReactDOM',
			commonjs2: 'react-dom',
			commonjs: 'react-dom',
			amd: 'react-dom'
		}
	},

	plugins: [new CleanWebpackPlugin()]
}
