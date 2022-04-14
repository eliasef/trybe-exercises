// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. Exemplo de palíndromo: arara .

function ehPalindromo (palavra) {

let palindromo = ''

for (let i = palavra.length -1; i >= 0; i--) {
    palindromo += palavra[i]
}

if (palindromo === palavra) {
    return true
} else {
    return false
}

}

console.log(ehPalindromo('arara'))