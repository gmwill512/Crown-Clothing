import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

const middleWare = [logger];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const store = createStore(rootReducer, applyMiddleware(...middleWare));
  const persistor = persistStore(store);
  return { store, persistor };
};
