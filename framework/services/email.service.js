import fetch, {Headers} from 'node-fetch';
import urls from '../config/urls';
import utils from '../helpers/emails';

if (!globalThis.fetch) {
  globalThis.fetch = fetch
  globalThis.Headers = Headers
}
const Emails = {
    getEmail: async (email) => {
      const r = await fetch(`${urls.email}email_verification/${email}`, { method: 'GET', redirect: 'follow',
      headers: new Headers({
        'apikey': utils().Keys().myRealApiKey(),
      })});
      return r;
    },
    getEmailWithoutKey: async (email) => {
      const r = await fetch(`${urls.email}email_verification/${email}`, { method: 'GET', redirect: 'follow'});
      return r;
    },
    getEmailWithInvalidKey: async (email) => {
      const r = await fetch(`${urls.email}email_verification/${email}`, { method: 'GET', redirect: 'follow',
      headers: new Headers({
        'apikey': utils().Keys().fake(),
      })});
      return r;
    },
  };
  
export default Emails;