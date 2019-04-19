
const path = require('path');
const common = require("./webpack.common")
const merge = require("webpack-merge")
var HtmlWebpackPlugin = require('html-webpack-plugin');  // creates a genarated HTML template to put you files on.



module.exports =merge(common,{
  mode:"development",
  output: { 
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist') 
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: "./assets/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, 
        {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('autoprefixer')
              ];
            }
          }
        },
        {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },

    ]
  }
});
