const readline = require('readline-sync');

const options = ['Attack', 'Heal'];
const choix = readline.keyInSelect(options, 'So?\n')
console.log(options[choix]);