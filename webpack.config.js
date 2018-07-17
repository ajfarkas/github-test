const path = require('path');
const webpack = require('webpack');

const approot = path.resolve(__dirname);
console.log(path.join(approot, '/dist'))

module.exports = {
	// fast sourcemap, refs compiled code
	devtool: 'eval',
	mode: 'development',
	entry: {
		app: './src/app.js',
	},
	output: {
		path: path.join(approot, '/dist'),
		filename: '[name].js',
		sourceMapFilename: '[name]-map.js'
	},
	// no plugins right now
	plugins: [],
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node-modules/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: [
						[
							'env',
							{
								modules: false,
							},
						],
						'react',
						'stage-1',
					],
					plugins: [
						'transform-react-jsx',
					],
				}
			},{
				loader: 'eslint-loader',
				options: {
					failOnWarning: false,
					failOnError: true,
					emitError: true,
				}
			}]
		}],
	}
};
