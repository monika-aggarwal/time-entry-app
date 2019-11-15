var path = require('path')

function getPathFromRoot(pathString) {
  return path.resolve(__dirname, pathString)
}
var pathList = {
  srcClient: getPathFromRoot('./src/client'),
  srcShared: getPathFromRoot('./src/shared'),
  srcServer: getPathFromRoot('./src/server'),
  src: getPathFromRoot('./src'),
  dist: getPathFromRoot('./dist'),
  publicPath: '/',
  // assets: getPathFromRoot('./src/assets')
}

module.exports = pathList