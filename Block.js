const createHash = require('./HashCreator')
class Block {

    constructor(data) {
        this.body = data
        this.time = new Date().getTime()
        this.nonce = 44444
    }

    createHash() {
        return new Promise((resolve, reject) => {
            this.hash = createHash(this)
            resolve(this)
        })
    }
}
module.exports = Block
