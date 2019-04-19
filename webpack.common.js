
const path = require('path');




module.exports = {
  entry: {
    main: './assets/js/main/entry.js',
    vendor: "./assets/vendor.js",
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [ 'es2015', { modules: false } ],
            'stage-0', 'react'
          ]
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },{
        test: /\.mp4$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath:"imgs"
          }
        }
      },
      {
        test: /\.(svg|png|PNG|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath:"imgs"
          }
        }
      }
    ]
  }
};
