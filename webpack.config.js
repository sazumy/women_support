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
      // css/sass-loaderの設定
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          // Sassをバンドルするための機能
          {
            loader: "sass-loader",
            options: {
              // ソースマップの利用有無
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ]  
};
