/* eslint-disable import/prefer-default-export */
import type { DecimalPatternString } from '~/types/common';
import type { RefinedResponse, RefinedError } from '~/types/apis';

export const isApiError = (
  arg: RefinedResponse | RefinedError,
): arg is RefinedError => arg.status !== 200;

export const isDecimalPatternString = (
  arg: string,
): arg is DecimalPatternString => arg.match(/^-?\d+\.\d{2}$/) !== null;
