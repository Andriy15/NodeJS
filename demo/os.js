const os = require('os')

console.log('Операційна система: ', os.platform())

console.log('Архітектура процесора: ', os.arch())

console.log('Інфа по процесору: ', os.cpus())

console.log('Вільна память: ', os.freemem())

console.log('Всього память: ', os.totalmem())

console.log('Домашня діректорія: ', os.homedir())

console.log('Час скільки ввімкнена системи: ', os.uptime())


