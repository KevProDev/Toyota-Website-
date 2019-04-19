
const path = require('path');
const common = require("./webpack.common")
const merge = require("webpack-merge")
var HtmlWebpackPlugin = require('html-webpack-plugin');  // creates a genarated HTML template to put you files on.
const CleanWebpackPlugin = require("clean-webpack-plugin") // Clean up dist folder of old files before pushing to production
const miniCssExtractPlugin = require("mini-css-extract-plugin") // take the sccs & css and make a css file. Then genarate a css file in the html template
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");




module.exports =merge(common,{
  mode:"development",
  output: { 
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist') 
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization:{
    minimizer: [
      new optimizeCssAssetsWebpackPlugin(), 
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./assets/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace:true,
          removeComments:true
        }
        })
    ]
  },
  plugins: [
    
    new miniCssExtractPlugin({filename: "[name].[contentHash].css"}),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./assets/template.html"
      }
    
    )
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
      },{
        test: /\.scss$/,
        use: [
          miniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          }
        ]
      }

    ]
  }
});
