import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

// root reducer - 1 big reducer

// to create a store we would need only root reducer
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));
// but to be usefull we also need to pass the logger
// This is what we passing to the provider in index.js
export const store = createStore(rootReducer, undefined, composedEnhancers);
