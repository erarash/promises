/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath,callback) {
  fs.readFile(filePath, (err,content) => {
    if (err){
      console.log('yo shit fucked up bro' )
      callback(err)
    } else {
      callback(null, content.toString().split('\n')[0])
    }
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
 
  request(url, (err,code) => {
    if (err){
      console.log('invalid URI')
      callback(err)
    } else {
      callback(null, code.statusCode)
    }
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
