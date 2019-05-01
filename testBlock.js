const Block = require('./Block')
const block = new Block("hello dummy")
block.createHash().then((result) => {
    console.log(`hash of the block is ${result.hash}`)
    console.log(JSON.stringify(result))
})
