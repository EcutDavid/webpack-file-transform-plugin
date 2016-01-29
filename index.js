var path = require('path')
var fs = require('fs')


function FileTransform(options) {
  var self = this

  self.filePath = options.path
  self.newPath = options.outputPath
}

FileTransform.prototype.apply = function(compiler) {
  var self = this
  compiler.plugin('done', function() {
    fs.exists(self.filePath, (exists) => {
      if (exists) {
        function handleReanmeException(e) {
          if (e) {
            console.log('task directory not exists: ' + self.newPath)
          }
        }
        fs.rename(self.filePath, self.newPath, handleReanmeException)
      }else {
        console.log('file not exists: ' + self.filePath)
      }
    })
  })
}

module.exports = FileTransform
