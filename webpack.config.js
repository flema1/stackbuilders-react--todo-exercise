const path = require('path');
module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: './client/public/bundle.js'
  },
  watch: true,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*', 'png, "jpg', "jpeg", "svg"],
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|jp(e*)g|svg)$/, use: 'url-loader' },
      { test: /\.(ttf|eot|svg)$/, use: 'file-loader' }
    ]
  }
}