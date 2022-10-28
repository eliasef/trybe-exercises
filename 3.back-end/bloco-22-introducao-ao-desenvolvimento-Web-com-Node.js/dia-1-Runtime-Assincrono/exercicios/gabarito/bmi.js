var readlineSync = require('readline-sync');

const peso = 80;
const altura = 1.75;

const calculaIMC = (peso, altura) => {
    const calculo = peso / (altura * altura);
    return calculo;
}

const engine = () => {
    const peso = readlineSync.question('What', 'your weight');
    console.log(typeof peso);
    const altura = readlineSync.question('What', 'your height?')
    console.log(typeof altura)
    return calculaIMC(peso, altura);
}

console.log(engine());