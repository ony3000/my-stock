/* eslint-disable import/prefer-default-export */
import type { Dict, DecimalPatternString } from '~/types/common';
import type { ManuallyRaisedExceptionData, RefinedResponse, RefinedError } from '~/types/apis';

export const isDict = (arg: unknown): arg is Dict => (
  arg !== undefined && arg !== null && Object.getPrototypeOf(arg) === Object.prototype
);

export const isManuallyRaisedExceptionData = (
  arg: unknown,
): arg is ManuallyRaisedExceptionData => (
  isDict(arg)
    && typeof arg.code === 'string'
    && typeof arg.title === 'string'
    && typeof arg.message === 'string'
);

export const isApiError = (
  arg: RefinedResponse | RefinedError,
): arg is RefinedError => (arg.status < 100 || arg.status >= 400);

export const isDecimalPatternString = (
  arg: string,
): arg is DecimalPatternString => arg.match(/^-?\d+\.\d{2}$/) !== null;
