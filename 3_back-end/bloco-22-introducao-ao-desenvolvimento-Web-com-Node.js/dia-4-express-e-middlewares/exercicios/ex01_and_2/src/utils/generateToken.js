const crypto = require('crypto')
// crypto é um módulo do node, que tem uma função chamada randomBytes, gera uma criptografia aleatória e forte de acordo com o número especificado. Posso gerar em formato de string, com o binário hexadecimal.

function generateToken() {
    return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;