// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker/locale/en';
import { useSetRecoilState } from 'recoil';
import type { Profile } from '~/types/mocks';
import { typedPost } from '~/plugins/axios';
import { errorState } from '~/store/atoms';
import BaseButton from './base-button';

export default function Unhandled403Button() {
  const setError = useSetRecoilState(errorState);

  const apiRequest = async () => {
    const randomFirstName = faker.name.firstName();
    const randomLastName = faker.name.lastName();
    const randomPhoneNumber = faker.phone.number();
    const randomEmail = faker.internet.email(randomFirstName, randomLastName);

    const [error, response] = await typedPost<Profile>('profiles/', {
      name: `${randomFirstName} ${randomLastName}`,
      phone: randomPhoneNumber,
      email: randomEmail,
    }, {});

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
      textContent="Create random profile w/o valid auth (403)"
      onClick={apiRequest}
    />
  );
}
