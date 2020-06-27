const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: '/',
    proxy: {
      '/': 'http://localhost:3000',
    },

    publicPath: 'http://localhost:8080/build/',

<<<<<<< HEAD
    // // publicPath: 'http://localhost:8080/build/',
    // publicPath: '/',

    
||||||| merged common ancestors
    // publicPath: 'http://localhost:8080/build/',
    publicPath: '/',

    
=======
    // publicPath: 'http://localhost:8080/build/',
    // publicPath: '/',
>>>>>>> 829afe3f5b9287deb31c95618ce8c42ad4e8f33a
  },

  plugins: [new MiniCssExtractPlugin()],

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    } 
    ],
  },
};
