var path = require('path')
var fs = require('fs')


function FileTransform(options) {
  this.filePath = options.path
  this.newPath = options.outputPath
}

FileTransform.prototype.apply = function(compiler) {
  var self = this
  compiler.plugin('done', function() {
    fs.exists(self.filePath, function(exists) {
      if (exists) {
        function handleReanmeException(e) {
          if (e) {
            console.warn('task directory not exists: ' + self.newPath)
          }
        }
        fs.rename(self.filePath, self.newPath, handleReanmeException)
      }else {
        console.warn('file not exists: ' + self.filePath)
      }
    })
  })
}

module.exports = FileTransform
