import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../saga/index';
import WalletConnectSlice from './WalletConnectSlice';

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  sagaMiddleware
];

const configureStoreLazy = () => {
  const store = configureStore({
    reducer: {
      walletConnect: WalletConnectSlice
    },
    middleware
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

type StoreType = ReturnType<typeof configureStoreLazy>;
export type RootState = ReturnType<StoreType['getState']>;

export default configureStoreLazy;
