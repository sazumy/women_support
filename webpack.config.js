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
  devtool: 'eval-source-map'
};
