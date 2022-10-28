const readline = require('readline-sync'); // crio a biblioteca

const askName = () => readline.question('Qual é o nome do pacote ? ')

module.exports = { askName };