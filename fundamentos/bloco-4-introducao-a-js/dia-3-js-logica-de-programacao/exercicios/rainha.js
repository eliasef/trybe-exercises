let linhaRainha = 0;
let colunaRainha = 2;

let linhaBispo = 2;
let colunaBispo = 5;

let podeAtacar = false;

// 1. Pode atacar em linha?

if (linhaRainha === linhaBispo || colunaRainha === colunaBispo)   {
    podeAtacar = true;
}

for (let passos = 1; passos <= 7; passos ++) {
    let novaLinha = linhaRainha + passos
    let novaColuna = colunaRainha + passos
    if (novaLinha === linhaBispo && novaColuna === colunaBispo) {
        podeAtacar = true
        break;
    }
}

// 3. Pode atacar na diogonal ?

// 3.1. Pode atacar na diogonal inferior direita?

console.log('Pode atacar?', podeAtacar)