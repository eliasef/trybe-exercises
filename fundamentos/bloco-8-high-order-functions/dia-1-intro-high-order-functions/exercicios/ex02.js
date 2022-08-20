// 2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sorteio = (apostado) => {
    const numberCorreto = (Math.floor(Math.random() *6))

    if (apostado === numberCorreto) {
        return 'Parabéns você ganhou!'
    } else {
        return 'Tente novamente.'
    }
}

const doingThings = (func) => {
    const callBack = func(3)
    return callBack
}

console.log(doingThings(sorteio))