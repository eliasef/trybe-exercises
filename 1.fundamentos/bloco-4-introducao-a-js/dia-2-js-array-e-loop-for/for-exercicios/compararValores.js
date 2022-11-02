let acertos = 0 
let jogoAelida = [1,2,3,4,5]
let sorteio = [9,8,6,4,5]

for (let index = 0; index < jogoAelida.length; index++) {
    let valoresAelida = jogoAelida[index];
    for (let index2 = 0; index2 < sorteio.length; index2 ++) {
        let valoresSorteio = sorteio[index2]
        if (valoresAelida === valoresSorteio) {
            acertos ++
        }
    }
}

console.log('Acertos: ' + acertos)