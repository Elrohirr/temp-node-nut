const { log } = require('console')
const {readFile, writeFile} = require('fs') // export only these methods from built-in method fs module
// const fs = require('fs')

console.log('start');
readFile('./content/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8', (err,result)=>{
        if(err){
            console.log(err)
            return
    }
        const second = result;
        writeFile(
        './content/result-async.txt',
        `Here is the result: ${first} and ${second}`,
        (err, result)=>{
            if(err){
                console.log(err)
                return
    }
            console.log('done with this task')
})})})
console.log('starting next text');