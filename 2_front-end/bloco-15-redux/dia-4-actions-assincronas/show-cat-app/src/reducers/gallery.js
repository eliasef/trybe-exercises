import { GET_PICTURE, LOADING_API, ERROR_API } from "../actions";

const INITIAL_STATE = {
  isLoading: false,
  imgURL: "",
  defaultImg: true,
  error: null,
};

function gallery(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING_API:
      return {
        ...state,
        isLoading: true,
        defaultImg: true,
      };
    case GET_PICTURE:
      return {
        ...state,
        isLoading: false,
        imgURL: action.data,
        defaultImg: false,
        error: null,
      };
    case ERROR_API:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

export default gallery;
