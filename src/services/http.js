import auth from './auth';
import entries from './entries';

auth.localStorage = localStorage;
entries.localStorage = localStorage;

export default {
  auth: auth,
  entries: entries
}

