import { useSetRecoilState } from 'recoil';
import { base64Encode } from '@ony3000/base64-converter';
import type { Profile } from '~/types/mocks';
import { typedPost } from '~/plugins/axios';
import { errorState } from '~/store/atoms';
import { isApiError } from '~/utils/type-guard';
import BaseButton from './base-button';

export default function Unhandled400Button() {
  const setError = useSetRecoilState(errorState);

  const apiRequest = async () => {
    const response = await typedPost<Profile>('profiles/', {}, {
      headers: {
        Authorization: `Basic ${base64Encode('admin:fhzjfdjemals')}`,
      },
    });

    if (isApiError(response)) {
      setError(response);
    }
    else {
      console.log(response);
    }
  };

  return (
    <BaseButton
      className="bg-red-400"
      textContent="Create random profile w/o valid data (400)"
      onClick={apiRequest}
    />
  );
}
