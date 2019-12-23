module.exports = {
  mode: 'development',
  entry: './src/bundle.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  devServer:{
    contentBase: './dist'
  },
  devtool: 'eval-source-map'
};
