const Redux = require('redux');

const ESTADO_INICIAL = {
    login: false,
    email: "",
}

const fazerLogin = (email) => ({
    type: "LOGIN",
    email
})

const reducer = (state = ESTADO_INICIAL, action) => {
    switch(action.type) {
        case "LOGIN": 
        return {
            ...state,
            login: true,
            email: action.email,
        };
        default:
            return state;
    }
}

// att

const store = Redux.createStore(reducer);

console.log(store.getState());

//{ login: false, email: '' }

store.dispatch(fazerLogin("alguem@email.com"))

console.log(store.getState());

// { login: true, email: 'alguem@email.com' }