import { useSetRecoilState } from 'recoil';
import type { Profile } from '~/types/mocks';
import { typedGet } from '~/plugins/axios';
import { errorState } from '~/store/atoms';
import { isApiError } from '~/utils/type-guard';
import BaseButton from './base-button';

export default function Unhandled404Button() {
  const setError = useSetRecoilState(errorState);

  const apiRequest = async () => {
    const response = await typedGet<Profile>('profiles/0/');

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
      textContent="Get a non-existent profile (404)"
      onClick={apiRequest}
    />
  );
}
