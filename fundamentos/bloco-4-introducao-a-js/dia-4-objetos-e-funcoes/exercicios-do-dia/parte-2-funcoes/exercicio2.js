// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorIndice(numbers) {

let indiceMaior = 0;

for (let indice in numbers) {
    if (numbers[indice] > indiceMaior) {
        indiceMaior = indice
    }
}
return indiceMaior;

}

console.log(maiorIndice([2, 3, 6, 7, 10, 1]))

