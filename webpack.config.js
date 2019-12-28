const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './app/src/bundle.js',
  output: {
    path: `${__dirname}/app`,
    filename: 'main.js'
  },
  devServer:{
    contentBase: './app'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ use: 'css-loader' })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ]  
};
