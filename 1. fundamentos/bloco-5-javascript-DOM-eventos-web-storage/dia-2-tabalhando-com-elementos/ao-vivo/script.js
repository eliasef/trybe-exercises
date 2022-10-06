let container = document.getElementById("first")

function addDiv (classe) {
  let newDiv = document.createElement("div")
  newDiv.className = classe
  return newDiv
}

function addChild (elemento, classe) {
  elemento.appendChild(addDiv(classe))
}

let features = ['red circle small','green square medium','yellow circle big'];

for (let index of features) {
  addChild(container, index)
}

addDiv('red circle small')


