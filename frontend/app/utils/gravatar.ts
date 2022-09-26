/* eslint-disable import/prefer-default-export */
import md5 from 'crypto-js/md5';

export const makeGravatarUrl = (code: string): string => {
  const localPart = code.trim().replace(/[^a-z]/gi, '_').toLowerCase();
  const domain = 'my-stock.co.kr';
  const email = `${localPart}@${domain}`;
  const hash = md5(email).toString();

  return `https://www.gravatar.com/avatar/${hash}?f=y&d=retro`;
};
