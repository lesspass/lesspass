import AuthService from './auth';
import EntryServices from './entries';

let Auth = new AuthService();
let Entries = new EntryServices();

export {Auth};
export {Entries};

export default {
  auth: Auth,
  entries: Entries
}

