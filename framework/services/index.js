import Emails from './email.service';
const api = () => ({
  Emails: () => ({ ...Emails }),
});

export default api;