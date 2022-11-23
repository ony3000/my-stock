/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';
import type { UniformError } from '~/types/apis';

export const errorState = atom<UniformError | null>({
  key: 'errorState',
  default: null,
});
