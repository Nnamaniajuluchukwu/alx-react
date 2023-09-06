const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");

module.exports = {
  mode: 'development',
	entry: {
		header: {
			import: './modules/header/header.js',
			dependOn: 'shared',
		},
		body: {
			import: './modules/body/body.js',
			dependOn: 'shared',
		},
		footer: {
			import: './modules/footer/footer.js',
			dependOn: 'shared',
		},
		shared: 'jquery',
	},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    chunkFilename: '[name].bundle.js', // Define chunk filename pattern
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  devServer: {
    port: 8564,
    static: path.resolve(__dirname, 'public'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: "Webpack Output",
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        // Create a vendor chunk for jQuery and Lodash
        vendors: {
          test: /[\\/]node_modules[\\/](jquery|lodash)[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
