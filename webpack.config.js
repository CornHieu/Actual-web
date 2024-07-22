const path = require('path');

module.exports = {
  entry: {
    comment: './src/appComment.js',
    aboutme: './src/aboutme.js',
    homepage: './src/homepage.js',
    pagination: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    static: path.join(__dirname, 'static'),
    compress: true,
    port: 9000
  }
};
