/// <reference types="react-scripts" />
import { Ethereumish } from '@/common/types/Ethereum';

export {};

declare global {
  interface Window {
    ethereum: Ethereumish;
  }
}
