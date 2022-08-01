import { all, race } from 'redux-saga/effects';

import WalletConnectSaga from './wallteConnectSaga';

export default function* rootSaga(): Generator {
  yield race([
    all([
      WalletConnectSaga(),
    ])
  ]);
}
