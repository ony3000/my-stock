import type { Profile } from '~/types/mocks';
import { typedGet } from '~/plugins/axios';
import BaseButton from './base-button';

export default function Ordinary200Button() {
  const apiRequest = async () => {
    const response = await typedGet<Profile[]>('profiles/');

    console.log(response);
  };

  return (
    <BaseButton
      className="bg-blue-400"
      textContent="Get profile list (200 OK)"
      onClick={apiRequest}
    />
  );
}