const os = require('os');
//const readline = require('readline');
//const reader = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
//})

// info about current user
const user = os.userInfo()
console.log(user)

// method that returns the system uptime in seconds (with a converter to minutes)
console.log(`The system uptime is ${os.uptime} seconds`)

//reader.question('Would you like to converte the uptime in minutes? y or n ', function(answer){
//    if (answer == 'y'){
//        console.log('Your system uptime in minutes is ' + os.uptime/60 + ' minutes')
//    }
//    reader.close()
//})

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)
