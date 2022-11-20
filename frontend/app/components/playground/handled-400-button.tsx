import { useSetRecoilState } from 'recoil';
import { base64Encode } from '@ony3000/base64-converter';
import type { Profile } from '~/types/mocks';
import { typedPatch } from '~/plugins/axios';
import { errorState } from '~/store/atoms';
import { isApiError } from '~/utils/type-guard';
import BaseButton from './base-button';

export default function Handled400Button() {
  const setError = useSetRecoilState(errorState);

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

    if (isApiError(response)) {
      setError(response);
    }
    else {
      // eslint-disable-next-line no-console
      console.log(response);
    }
  };

  return (
    <BaseButton
      className="bg-red-400"
      textContent="Update first profile w/o valid data (manually-raised-400)"
      onClick={apiRequest}
    />
  );
}
