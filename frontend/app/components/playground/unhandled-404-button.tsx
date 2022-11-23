import { useSetRecoilState } from 'recoil';
import type { Profile } from '~/types/mocks';
import { typedGet } from '~/plugins/axios';
import { errorState } from '~/store/atoms';
import BaseButton from './base-button';

export default function Unhandled404Button() {
  const setError = useSetRecoilState(errorState);

  const apiRequest = async () => {
    const [error, response] = await typedGet<Profile>('profiles/0/');

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
      textContent="Get a non-existent profile (404)"
      onClick={apiRequest}
    />
  );
}
