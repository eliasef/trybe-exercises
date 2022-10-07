import charAPI from "../services/charAPI";
export const SEARCH_BEGIN = 'SEARCH_BEGIN';
export const SEARCH_SUCESS = 'SEARCH_SUCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

export const searchBegin = () => ({ // request
    type: SEARCH_BEGIN,
    loading: true, 
})

export const searchSucess = (character) => ({
    type: SEARCH_SUCESS,
    loading: false,
    character: character, // character vai ser o array da API, e character[0] acessa seu objeto
})

export const searchError = (error) => ({
    type: SEARCH_ERROR,
    loading: false,
    error: error,
})

export function thunkCharacter(name) {
    return (dispatch) => { // thunk declarado
        dispatch(searchBegin());
        return charAPI(name).then( // chama o array da API
        (character) => dispatch(searchSucess(character)), // acessa o objeto do array através do character[0]
        (error) => dispatch(searchError(error)))
    } 
}
