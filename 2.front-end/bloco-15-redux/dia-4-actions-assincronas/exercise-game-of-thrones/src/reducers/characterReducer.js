import { SEARCH_BEGIN, SEARCH_SUCESS, SEARCH_ERROR } from '../actions/characterAction';

const INITIAL_STATE = {
    isLoading: false,
    character: '', // guarda o objeto
}

function characterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_BEGIN: 
            return {
                ...state,
                isLoading: true,
            }
        case SEARCH_SUCESS: 
            return {
                ...state,
                isLoading: false,
                character: action.character[0],
            }
        case SEARCH_ERROR: 
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default characterReducer;