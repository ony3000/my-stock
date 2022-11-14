import type { Profile } from '~/types/mocks';
import { typedGet } from '~/plugins/axios';
import BaseButton from './base-button';

export default function Unhandled000Button() {
  const apiRequest = async () => {
    const response = await typedGet<Profile>('profiles/0/delayed/', {
      timeout: 3000,
    });

    console.log(response);
  };

  return (
    <BaseButton
      className="bg-red-400"
      textContent="Get a profile after 5 seconds, but only waits 3 seconds (0)"
      onClick={apiRequest}
    />
  );
}
