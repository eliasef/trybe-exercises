import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const GET_IMAGE = 'GET_IMAGE'
const REQUEST_IMAGE = "REQUEST_IMAGE";
const FAILED_REQUEST = "FAILED_REQUEST";

function actionGetImage(json) {
    return {
        type: GET_IMAGE,
        payload: json.message,
    }
}

function actionRequestDog() {
    return {
        type: REQUEST_IMAGE,
    }
}

function actionFailedRequest(error) {
    return {
        type: FAILED_REQUEST,
        payload: error,
    }
}

export function actionFetchDog() {
    return async (dispatch) => {
        dispatch(actionRequestDog());
        try {
            const resolve = await fetch('https://dog.ceo/api/breeds/image/random')
            const data = await resolve.json();
            dispatch(actionGetImage(data))
        } catch (error) {
            dispatch(actionFailedRequest(error))
        }
    }
}

// export function actionFetchDog() {
//     return (dispatch) => {
//         dispatch(actionRequestDog());
//         return fetch('https://dog.ceo/api/breeds/image/random')
//         .then(response => response.json())
//         .then(json => dispatch(actionGetImage(json)))
//         .catch(error => dispatch(actionFailedRequest(error)))
//     };
// }



const INITIAL_STATE = {
    isFetching: false,
    imagePath: '',
    error: '',
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_IMAGE:
            return {
                ...state,
                isFetching: true,
            };
        case GET_IMAGE:
            return {
                ...state,
                imagePath: action.payload,
                isFetching: false,
            }
        case FAILED_REQUEST:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
        default:
            return state;
    }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;