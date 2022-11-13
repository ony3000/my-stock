import { base64Encode } from '@ony3000/base64-converter';
import type { Profile } from '~/types/mocks';
import { typedPatch } from '~/plugins/axios';
import BaseButton from './base-button';

export default function Handled400Button() {
  const apiRequest = async () => {
    const response = await typedPatch<Profile>('profiles/first-one/', {
      name: '',
      phone: '',
      email: '',
    }, {
      headers: {
        Authorization: `Basic ${base64Encode('admin:fhzjfdjemals')}`,
      },
    });

    console.log(response);
  };

  return (
    <BaseButton
      className="bg-red-400"
      textContent="Validation error (400 Bad Request)"
      onClick={apiRequest}
    />
  );
}
