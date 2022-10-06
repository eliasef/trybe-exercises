let a = 4;
let b = 2;

// 1. OPERAÇÕES ARITIMÉTICAS BÁSICAS

console.log(a + b) 
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

// 2. RETORNAR O MAIOR DE DOIS NÚMEROS

const num1 = 10;
const num2 = 5;

if (num1 > num2) {
    console.log(`O num1 (${num1}) é maior que o num2 (${num2})`)
} else if (num2 > num1) {
    console.log(`O num2 (${num2}) é maior que o num1 (${num1})`)
}


// 3. RETORNA O MAIOR DE TRÊS NÚMEROS

const number1 = 30;
const number2 = 50;
const number3 = 70;

if (number1 > number2 && number1 > number3) {
    console.log(`O number1 (${number1}) é maior que o number2 (${number2}) e maior que o number3 (${number3})`)   
} else if (number2 > number1 && number2 > number3) {
    console.log(`O number2 (${number2}) é maior que o number1 (${number1}) e maior que o number3 (${number3})`)
} else if (number3 > number1 && number3 > number2) {
    console.log(`O number3 (${number3}) é maior que o number1 (${number1}) e maior que o number2 (${number2})`)
}

// 4. POSITIVO, NEGATIVO OU ZERO

const valor = -5;

if (valor > 0) {
    console.log('positive')
} else if (valor < 0) {
    console.log('negative')
} else if (valor = 0) {
    console.log('zero')
}

// 5. TRIANGULOS

const ang1 = 50
const ang2 = 60
const ang3 = 70

if (ang1 + ang2 + ang3 === 180) {
    console.log(true)
} else if (ang1 + ang2 + ang3 < 0) {
    console.log(false)
}
else {
    console.log(false)
}

// 6. PEÇA DE XADREZ

let peca = 'BISPO'

if (peca === 'bispo' || peca === 'BISPO') {
    console.log('diagonais')
} else {
    console.log('erro')
}

// 7. NOTAS

let nota = -1

if (nota >= 90) {
    console.log('A')
} else if (nota >= 80) {
    console.log('B')
} else if (nota >= 70) {
    console.log('C')
} else if (nota >= 60) {
    console.log('D')
} else if (nota >= 50) {
    console.log('E')
} else if (nota < 50 && nota > 0) {
    console.log('F')
} else if (nota < 0) {
    console.log('erro')
}

// 8. TRÊS NÚMEROS - 1 PAR

const numero1 = 5;
const numero2 = 7;
const numero3 = 10;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
    console.log('true')
} else {
    console.log('false')
}

// 9. TRÊS NÚMEROS - 1 ÍMPAR

const numer1 = 10;
const numer2 = 20;
const numer3 = 4;

if (numer1 % 2 === 1 || numer2 % 2 === 1 || numer3 % 2 === 1) {
    console.log('true')
} else {
    console.log('false')
}

// 10. CUSTO PRODUTO

// qual o lucro? (valor de venda descontado o custo do produto)

const custoProduto = 10
const impostoSobreOcusto = 0.2 * custoProduto
const valorCustoTotal = custoProduto + impostoSobreOcusto;
const valorDeVenda = 20;

let lucro = valorDeVenda - valorCustoTotal

console.log(lucro)

// 11. INSS e IR

let salarioBruto = 3000;
let aliquota;
let inss;
let salarioBase;

if (salarioBruto <= 1556.94) {
    aliquota = 0.08
} else if (salarioBruto <= 2594.92) {
    aliquota = 0.09
} else if (salarioBruto <= 5189.82) {
    aliquota = 0.11
} else if (salarioBruto > 5189.82) {
    aliquota = 570.88
}

inss = salarioBruto * aliquota
salarioBase = salarioBruto - inss

let impostoDeRenda;
let parcela;
let aliquotaImposto;

if (salarioBase <= 1903.98) {
    impostoDeRenda = 0
} else if (salarioBase <= 2826.65) {
    aliquotaImposto = 0.075
    parcela = 142.80
} else if (salarioBase <= 3751.05) {
    aliquotaImposto = 0.15
    parcela = 354.80
} else if (salarioBase <= 4664.68) {
    aliquotaImposto = 0.225 
    parcela = 636.13
} else if (salarioBase > 4664.68) {
    aliquotaImposto = 0.275
    parcela = 869.36
}

let liquotaBase = salarioBase * aliquotaImposto - parcela

let salarioLiquido = salarioBase - liquotaBase

console.log(salarioLiquido)

