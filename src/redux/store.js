import { createStore, applyMiddleWare } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middleWare = [logger];

const store = createStore(rootReducer, applyMiddleWare(...middleWare));

export default store;
