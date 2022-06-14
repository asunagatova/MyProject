import api from '../framework/services';
import utils from '../framework/helpers/emails';

describe('Отправляем email', () => {
    test('Получить ответ на валидный email', async () => {
        const response = await api().Emails().getEmail(utils().Email().realEmail());
        expect(response.status).toEqual(200);
    });
});

describe.each`
email                                                               | expected
${utils().Email().default()}                                        | ${200}
${utils().Email().withYandex()}                                     | ${200}
${utils().Email().withSymbols()}                                    | ${200}
${utils().Email().withLocalEmail()}                                 | ${200}
${utils().Email().withALongName()}                                  | ${200}
${utils().Email().withForeignEmail()}                               | ${200}
${utils().Email().withForeignEmailAndRussianName()}                 | ${200}
`('$email', ({email, expected}) => {
    test(`Параметризированный тест с разными почтами`, async () => {
        console.log(email)
        const response = await api().Emails().getEmail(email);
        expect(response.status).toEqual(expected);
    });
});

describe('Отправляем email с некорректным api_key', () => {
    test('Получить ответ на валидный email без api_key', async () => {
        const response = await api().Emails().getEmailWithoutKey(utils().Email().realEmail());
        expect(response.status).toEqual(401);
    });
    test('Получить ответ на валидный email с несуществующим api_key', async () => {
        const response = await api().Emails().getEmailWithInvalidKey(utils().Email().realEmail());
        expect(response.status).toEqual(401);
    });
});