export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';
export const LOADING_API = 'LOADING_API';
export const ERROR_API = "ERROR_API";

export const actionGetPicture = (data) => ({ 
  type: GET_PICTURE,
  data: data,
});

export const actionLoading = () => ({ // action do REQUEST
  type: LOADING_API,
})

export const actionError = (error) => ({
  type: ERROR_API,
  error: error,
})

export function fetchAPI() {
  return async (dispatch) => { // thunk declarado
    dispatch(actionLoading())
    try {
      const CAT_API = await fetch('https://aws.random.cat/meow')
      const { file } = await CAT_API.json()
      dispatch(actionGetPicture(file))
    } catch (error) {
      console.log(error)
      dispatch(actionError(error)) // error.message geralmente
    }
  }
}
