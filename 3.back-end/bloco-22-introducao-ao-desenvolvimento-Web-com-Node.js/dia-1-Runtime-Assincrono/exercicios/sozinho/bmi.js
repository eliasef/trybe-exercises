const readlineSync = require('readline-sync');

const calculaImc = (peso, altura) => {
    const calculo = (peso / (altura * altura)).toFixed(2);
    return `Your IMC is ${calculo}`;
}

const engine = () => {
    const peso = readlineSync.questionInt('What\'s your weight?');
    const altura = readlineSync.questionFloat('What\'s your height?');
    return calculaImc(peso, altura)
}

console.log(engine());

