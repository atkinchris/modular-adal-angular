var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'test/app.js'),
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  }
};
