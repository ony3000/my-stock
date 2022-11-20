// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker/locale/en';
import { useSetRecoilState } from 'recoil';
import { base64Encode } from '@ony3000/base64-converter';
import type { Profile } from '~/types/mocks';
import { typedPatch } from '~/plugins/axios';
import { errorState } from '~/store/atoms';
import { isApiError } from '~/utils/type-guard';
import BaseButton from './base-button';

export default function Conditional200Button() {
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
      className="bg-violet-400"
      textContent="Update first profile (200 or manually-raised-404)"
      onClick={apiRequest}
    />
  );
}
