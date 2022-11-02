/*  Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: 
{ area: 0, perimetro: 0 } 
perimetro = (base *2) + (altura * 2)
area = base * altura
*/

function areaPerim (base, altura) {
    
    let quadrilatero = {
        area: base * altura,
        perimetro: (base * 2) + altura *2,
    }

    return quadrilatero

}

console.log(areaPerim(2,4))
