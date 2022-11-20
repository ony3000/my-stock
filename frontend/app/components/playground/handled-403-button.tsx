// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker/locale/en';
import { useSetRecoilState } from 'recoil';
import type { Profile } from '~/types/mocks';
import { typedPatch } from '~/plugins/axios';
import { errorState } from '~/store/atoms';
import { isApiError } from '~/utils/type-guard';
import BaseButton from './base-button';

export default function Handled403Button() {
  const setError = useSetRecoilState(errorState);

  const apiRequest = async () => {
    const randomFirstName = faker.name.firstName();
    const randomLastName = faker.name.lastName();
    const randomPhoneNumber = faker.phone.number();
    const randomEmail = faker.internet.email(randomFirstName, randomLastName);

    const response = await typedPatch<Profile>('profiles/first-one/', {
      name: `${randomFirstName} ${randomLastName}`,
      phone: randomPhoneNumber,
      email: randomEmail,
    }, {});

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
      textContent="Update first profile w/o valid auth (manually-raised-403)"
      onClick={apiRequest}
    />
  );
}
