import { useSetRecoilState } from 'recoil';
import type { ListApiResponse } from '~/types/apis';
import type { Profile } from '~/types/mocks';
import { typedGet } from '~/plugins/axios';
import { errorState } from '~/store/atoms';
import BaseButton from './base-button';

export default function Ordinary200Button() {
  const setError = useSetRecoilState(errorState);

  const apiRequest = async () => {
    const [error, response] = await typedGet<ListApiResponse<Profile>>('profiles/');

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
      className="bg-blue-400"
      textContent="Get profile list (200)"
      onClick={apiRequest}
    />
  );
}
