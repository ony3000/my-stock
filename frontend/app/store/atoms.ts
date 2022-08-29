/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';
import type { RefinedError } from '~/types/apis';

export const errorState = atom<RefinedError | null>({
  key: 'errorState',
  default: null,
});
