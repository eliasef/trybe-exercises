// Importe o método applyMiddleware
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// Aplique o middleware
const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
);

export default store;
