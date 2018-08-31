const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env, options) => ({
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js',
  },
  devtool: options.mode === 'production' ? 'source-map' : 'eval',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
});
