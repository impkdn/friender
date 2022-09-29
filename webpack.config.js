const path = require('path');

module.exports = {
  entry: {
    popup: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
};