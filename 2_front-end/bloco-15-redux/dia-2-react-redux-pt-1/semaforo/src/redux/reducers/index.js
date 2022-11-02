import { CHANGE_SIGNAL } from '../actions';

const INITIAL_STATE = {
  signal: '',
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_SIGNAL:
    return {
      ...state,
      signal: action.color
    };
  default:
    return state;
  }
}

export default reducer;
