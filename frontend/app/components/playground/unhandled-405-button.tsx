import { base64Encode } from '@ony3000/base64-converter';
import type { Profile } from '~/types/mocks';
import { typedPut } from '~/plugins/axios';
import BaseButton from './base-button';

export default function Unhandled405Button() {
  const apiRequest = async () => {
    const response = await typedPut<Profile>('profiles/0/', {}, {
      headers: {
        Authorization: `Basic ${base64Encode('admin:fhzjfdjemals')}`,
      },
    });

    console.log(response);
  };

  return (
    <BaseButton
      className="bg-red-400"
      textContent="Update profile in an unsupported method (405)"
      onClick={apiRequest}
    />
  );
}
