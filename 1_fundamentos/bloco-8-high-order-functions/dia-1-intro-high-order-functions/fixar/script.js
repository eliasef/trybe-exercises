const wakeUp = (oi) => {
    return 'Acordando!!'
}

const cafe = () => {
    return 'Bora tomar café!!'
}

const dormir = () => {
    return 'Partiu dormir!!'
}

// Ao chamar a função doingThings:

const doingThings = (func) => {
    const callBack = func()
    console.log(callBack)
}

doingThings(wakeUp);
doingThings(cafe);
doingThings(dormir);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!