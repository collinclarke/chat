import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './reducers/root_reducer.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const middlewares = [thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState = {}) => {
  return (createStore(
    RootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  ))
}

export default configureStore;
