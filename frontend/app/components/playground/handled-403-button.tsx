// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker/locale/en';
import type { Profile } from '~/types/mocks';
import { typedPatch } from '~/plugins/axios';
import BaseButton from './base-button';

export default function Handled403Button() {
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
