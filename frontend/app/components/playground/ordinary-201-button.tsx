// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker/locale/en';
import { base64Encode } from '@ony3000/base64-converter';
import type { Profile } from '~/types/mocks';
import { typedPost } from '~/plugins/axios';
import BaseButton from './base-button';

export default function Ordinary201Button() {
  const apiRequest = async () => {
    const randomFirstName = faker.name.firstName();
    const randomLastName = faker.name.lastName();
    const randomPhoneNumber = faker.phone.number();
    const randomEmail = faker.internet.email(randomFirstName, randomLastName);

    const response = await typedPost<Profile>('profiles/', {
      name: `${randomFirstName} ${randomLastName}`,
      phone: randomPhoneNumber,
      email: randomEmail,
    }, {
      headers: {
        Authorization: `Basic ${base64Encode('admin:fhzjfdjemals')}`,
      },
    });

    console.log(response);
  };

  return (
    <BaseButton
      className="bg-blue-400"
      textContent="Create random profile (201)"
      onClick={apiRequest}
    />
  );
}
