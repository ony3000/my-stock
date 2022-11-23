import { useSetRecoilState } from 'recoil';
import { base64Encode } from '@ony3000/base64-converter';
import type { Profile } from '~/types/mocks';
import { typedPut } from '~/plugins/axios';
import { errorState } from '~/store/atoms';
import BaseButton from './base-button';

export default function Unhandled405Button() {
  const setError = useSetRecoilState(errorState);

  const apiRequest = async () => {
    const [error, response] = await typedPut<Profile>('profiles/0/', {}, {
      headers: {
        Authorization: `Basic ${base64Encode('admin:fhzjfdjemals')}`,
      },
    });

    if (error) {
      setError(error);
    }
    else {
      // eslint-disable-next-line no-console
      console.log(response);
    }
  };

  return (
    <BaseButton
      className="bg-red-400"
      textContent="Update profile in an unsupported method (405)"
      onClick={apiRequest}
    />
  );
}
