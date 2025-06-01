const {readFileSync, writeFileSync} = require('fs') // export only these methods from built-in method fs module
// const fs = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first} and ${second}`,
    {flag:'a'}
)

const sync = readFileSync('./content/result-sync.txt','utf8'); 
console.log(sync)
console.log('done with this task')
console.log('starting the next one')