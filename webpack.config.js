const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  // 様々なモジュールがバンドルされるファイル
  entry: './app/src/bundle.js',
  output: {
    // プロジェクトのルート
    path: `${__dirname}/app`,
    // index.htmlに読み込まれるJSファイル
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
