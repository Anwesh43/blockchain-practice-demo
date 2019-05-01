const createHash = require('./HashCreator')
const assert = require('assert')
const timedData = () => ({
    message : "hello",
    time : new Date().getTime().toString().slice(0, -3)
})

const staticData = () => "this will remain static"

const sha1 = createHash(staticData())
const sha2 = createHash(staticData())

assert(sha1.toString() === sha2.toString())
console.log(`sha1 is ${sha1}`)
console.log("*********************************************")
console.log(`sha2 is ${sha2}`)

const timedSha1 = createHash(timedData())
setTimeout(() => {
    const timedSha2 = createHash(timedData())
    console.log(`timedSha1 is ${timedSha1}`)
    console.log("*********************************************")
    console.log(`timedSha2 is ${timedSha2}`)
    assert(timedSha1.toString() !== timedSha2.toString())
}, 1001)
