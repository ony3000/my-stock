import type { Profile } from '~/types/mocks';
import { typedGet } from '~/plugins/axios';
import BaseButton from './base-button';

export default function Unhandled500Button() {
  const apiRequest = async () => {
    const response = await typedGet<Profile>('profiles/0/lowercase/');

    console.log(response);
  };

  return (
    <BaseButton
      className="bg-red-400"
      textContent="Get a non-existent profile with lowercase (500)"
      onClick={apiRequest}
    />
  );
}
