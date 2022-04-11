// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

function imprimeQuadradoAsteriscos(n) {

    for (let linha = 0; linha < n; linha ++) {
        let linhasDeAsteriscos = '*'

        for (let coluna = 0; coluna < n; coluna ++) {
            linhasDeAsteriscos += '*'
        }
        console.log(linhasDeAsteriscos)
    }

}

imprimeQuadradoAsteriscos(5)