/* eslint-disable import/prefer-default-export */
import type { RefinedResponse, RefinedError } from '~/types/apis';

export const isApiError = (
  arg: RefinedResponse | RefinedError,
): arg is RefinedError => arg.status !== 200;
