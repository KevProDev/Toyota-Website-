
const path = require('path');
const common = require("./webpack.dev") 
const merge = require("webpack-merge") // combine webpack.js files together
const CleanWebpackPlugin = require("clean-webpack-plugin") // Clean up dist folder of old files before pushing to production
const miniCssExtractPlugin = require("mini-css-extract-plugin") // take the sccs & css and make a css file. Then genarate a css file in the html template
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');  // creates a genarated HTML template to put you files on.


module.exports =merge(common,{
  mode:"production",
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
  plugins:[
    new miniCssExtractPlugin({filename: "[name].[contentHash].css"}),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          miniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            // options: {
            //   modules: true,
            //   importLoaders: 1,
            //   localIdentName: "[name]_[local]_[hash:base64]",
            //   sourceMap: true
            // }
          },
          {
            loader: "sass-loader",
          }
        ]
      }
    
    ]
  }
});

