/* eslint-disable import/prefer-default-export */
import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';

export const loader: LoaderFunction = async () => redirect('/home');
