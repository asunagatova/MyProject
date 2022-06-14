import { faker } from '@faker-js/faker';
const Email = {
    realEmail : () => {
      const real = 'sunagatova98@mail.ru';
      return real;
    },
    default : () => {
       const fake = faker.internet.email();
       return fake;
    },
    withYandex : () => { 
      const fake = faker.internet.email('Jeanne', 'Doe', 'yandex.ru');
      return fake;
    },
    withLocalEmail: () => {
      const fake = faker.internet.email('ALICE', 'Doe', 'ozon.ru');
      return fake;
    },
    withSymbols: () => { 
      const fake = faker.internet.email('3897278_*25!', 'Doe', 'mail.ru', { allowSpecialCharacters: true });
      return fake;
    },
    withALongName: () => {
      const fake = faker.internet.email('37443hjfhufdiufdiUifjkodru&hf998jfjso_123jfi', 'mail.ru')
      return fake;
    },
    withForeignEmail: () => {
      const fake = faker.internet.email('Bill', 'Doe', '@yahoo.com');
      return fake;
    },
    withForeignEmailAndRussianName: () => {
      const fake = 'ИванИванов@gmail.ru'
      return fake;
    },
}

const Keys = {
  fake : () => {
    const fake = faker.internet.password(32, true);
    return fake;
 },
  myRealApiKey : () => {
    const real = 'PamqdsQeaVHbRqyTt2ya9SKG1whb9Zy2';
    return real;
 },
}

const utils = () => ({
  Email: () => ({ ...Email }),
  Keys: () => ({ ...Keys }),
});

export default utils;