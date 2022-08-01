import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

interface WalletConnectSliceInstance {
  props?: string;
}

const initialState: WalletConnectSliceInstance = {
};

const reducers = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  walletConnectProvider: (state: WalletConnectSliceInstance) => {},
};

export const selectors = {
};

export const walletConnectSlice = createSlice({
  name: 'walletConnect',
  initialState,
  reducers
});
type WalletConnectSliceActionsType = typeof walletConnectSlice.actions;

export const actions = {
  ...walletConnectSlice.actions
} as WalletConnectSliceActionsType;

export default walletConnectSlice.reducer;
