import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/root_reducer.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const middlewares = [thunk, logger];

const configureStore = (preloadedState = {}) => {
  return (createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  ))
}

export default configureStore;
