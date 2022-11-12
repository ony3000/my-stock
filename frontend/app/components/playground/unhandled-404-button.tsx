import type { Profile } from '~/types/mocks';
import { typedGet } from '~/plugins/axios';
import BaseButton from './base-button';

export default function Unhandled404Button() {
  const apiRequest = async () => {
    const response = await typedGet<Profile>('profiles/0/');

    console.log(response);
  };

  return (
    <BaseButton
      className="bg-red-400"
      textContent="Get profile (404 Not Found)"
      onClick={apiRequest}
    />
  );
}
