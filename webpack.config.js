const path = require('path');

const config = {
  context: __dirname,
  entry: './src/whale-olympics',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: {
         loader: "babel-loader"
       }
     }
   ]
 },
 devtool: 'source-map',
};

module.exports = config
