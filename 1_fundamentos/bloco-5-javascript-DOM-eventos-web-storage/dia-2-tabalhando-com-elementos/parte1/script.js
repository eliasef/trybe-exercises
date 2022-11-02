   // 1. Acesse o elemento elementoOndeVoceEsta.
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

 // 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let pai = elementoOndeVoceEsta.parentElement

pai.style.color = 'red'

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
    // Você se lembra dos vídeos da aula anterior, como fazer isso?

document.getElementById("primeiroFilhoDoFilho").innerHTML = 'oiiiiiiiin'

// 4. Acesse o primeiroFilho a partir de pai.

pai.firstElementChild

 // 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

elementoOndeVoceEsta.previousElementSibling

 // 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

elementoOndeVoceEsta.nextSibling

// 7. 



// video:

let ingredientItems = [
    '500g de feijão carioquinha',
    '200g de toucinho',
    '1 concha de óleo',
    '1 cebola média picada',
    '4 dentes de alho',
    '5 ovos',
]

let ingredientList = document.querySelector('.ingredients-list')

for (let index = 0; index < ingredientItems.length; index ++) {
    let igredient = ingredientItems[index]

    let igredientListItem = document.createElement('li')

    igredientListItem.innerText = igredient

    console.log(igredientListItem)

    ingredientList.appendChild(igredientListItem)
}

// 1. Crie um irmão para elementoOndeVoceEsta

let pai = document.getElementById("pai")

const irmaoElementoOndeVOceEsta = document.createElement('section')

irmaoElementoOndeVOceEsta.id = 'irmaoElementoOndeVoceEsta'

pai.appendChild(irmaoElementoOndeVOceEsta)

// 2. Crie um filho para elementoOndeVoceEsta .

const filhoElementoOndeVoceEsta = document.createElement('section')

filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta'

elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta)

// 3. Crie um filho para primeiroFilhoDoFilho

let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho")

let filhoPrimeiroFilhoDoFilho = document.createElement('section')

primeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho'

primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho)

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

let paiDoPai = document.getElementById("paiDoPai")

paiDoPai.removeChild("primeiroFilho")