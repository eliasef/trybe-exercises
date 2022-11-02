// npm init -y
// touch bmi.js

// req 1

    // const calculaIMC = (peso, altura) => {
    //     const formula = peso * (altura * altura);
    //     return formula
    // }

    // console.log(calculaIMC(70, 1.80))

// req 2

    // scripts -> ,"bmi": "node bmi.js"

// req 3 e 4 (deixar dinamico)
// npm install readline-async

// bmi.js

const readlineSync = require('readline-sync');

const calculaIMC = (peso, altura) => {
    const formula = (peso * (altura * altura)).toFixed(2);
    return formula
}

const askAndCalcIMC = () => { 
    // o float 
    const peso = readlineSync.questionFloat('Qual seu peso ?');
    // console.log(typeof peso)
    // o float converte string em nubmer, no js usamos o parseFloat('20.9') // 20.9
    const altura = readlineSync.questionFloat('Qual sua altura ?');

    calculaIMC(peso, altura)
    console.log(calculaIMC)
}

console.log(askAndCalcIMC); // 20.343234

// FALTA FZR O 5 E 6 (fazer 1º com if e dps do metodo do gabarito-video), o 6 é do simpsons <3 // fazer no FDS


