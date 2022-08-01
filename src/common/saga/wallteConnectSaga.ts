import { all, put, takeEvery } from 'redux-saga/effects';

import { selectors, actions } from '@store/WalletConnectSlice';

function* walletConnect(): Generator {
  // get provider (wallet connect)
}

export default function* WalletConnectSaga(): Generator {
  yield all([
    takeEvery([actions.walletConnectProvider], walletConnect),
  ]);
}
