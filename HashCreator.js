const SHA256 = require('crypto-js/sha256')
module.exports = (obj) => SHA256(JSON.stringify(obj)).toString()
