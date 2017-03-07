var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: "./js/index.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          // 可以直接写class  不用写 className
          plugins: ['react-html-attrs']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    // 使用 webpack-dev-server --inline --hot 启动热更新项目，需要配置publicPath 
    publicPath: "/src/",
    filename: "bundle.js"
  }
};
