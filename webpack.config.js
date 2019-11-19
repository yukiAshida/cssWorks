module.exports = {
  entry: {
    app: "./app/src/index.js"
  },
  output: {
    path: __dirname + '/app/dist',
    filename: "[name].js"
  },
    devServer: {
    contentBase: __dirname + '/app',
    port: 8000,
    publicPath: '/dist/'
  },
  devtool: "eval-source-map",
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      enforce: "pre",
      exclude: /node_modules/,
      loader: "eslint-loader"
    }, {
      test: /\.css$/,
      loader: ["style-loader","css-loader"]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
     },{
      // 追記
      test: /\.(jpg|png)$/,
      loaders: 'url-loader'
    }]
  }
};