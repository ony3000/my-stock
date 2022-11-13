// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker/locale/en';
import type { Profile } from '~/types/mocks';
import { typedPost } from '~/plugins/axios';
import BaseButton from './base-button';

export default function Unhandled403Button() {
  const apiRequest = async () => {
    const randomFirstName = faker.name.firstName();
    const randomLastName = faker.name.lastName();
    const randomPhoneNumber = faker.phone.number();
    const randomEmail = faker.internet.email(randomFirstName, randomLastName);

    const response = await typedPost<Profile>('profiles/', {
      name: `${randomFirstName} ${randomLastName}`,
      phone: randomPhoneNumber,
      email: randomEmail,
    }, {});

    console.log(response);
  };

  return (
    <BaseButton
      className="bg-red-400"
      textContent="Empty or invalid auth (403 Forbidden)"
      onClick={apiRequest}
    />
  );
}
