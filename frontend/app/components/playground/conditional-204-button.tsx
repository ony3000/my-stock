import { base64Encode } from '@ony3000/base64-converter';
import { typedDelete } from '~/plugins/axios';
import BaseButton from './base-button';

export default function Conditional204Button() {
  const apiRequest = async () => {
    const response = await typedDelete('profiles/last-one/', {
      headers: {
        Authorization: `Basic ${base64Encode('admin:fhzjfdjemals')}`,
      },
    });

    console.log(response);
  };

  return (
    <BaseButton
      className="bg-violet-400"
      textContent="Delete last profile (204 or manually-raised-404)"
      onClick={apiRequest}
    />
  );
}
