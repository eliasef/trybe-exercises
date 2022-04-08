// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [];

let impares = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
        impares ++
    }
}
console.log(impares)

if (impares === 0) {
    console.log('nenhum valor ímpar encontrado')
} 