// 3.  Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console: 

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

info.recorrente = 'Sim'

for (let index in info) {
    console.log(index)
}