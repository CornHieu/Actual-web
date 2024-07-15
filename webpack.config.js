const path = require('path');

module.exports = {
  entry: {
    homepage: './src/homepage.js',  // Entry point for the homepage
    pagination: './src/index.js'    // Entry point for pagination
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: '[name].bundle.js',   // Output filename pattern
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // No need for options here since .babelrc is present
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: path.join(__dirname, 'static'),
    compress: true,
    port: 9000,
  },
};


