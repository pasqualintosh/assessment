const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
    publicPath: '/',
  },
  target: 'node',
  devServer: {
    port: '9500',
    contentBase: ['./public'],
    open: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(css|css)$/,
        exclude: /node_modules/,
        use: {
          loader: 'style-loader',
        },
      },
      {
        test: /\.(css|css)$/,
        exclude: /node_modules/,
        use: {
          loader: 'css-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
