export const MASTER_PASSWORD_KEY = "masterPassword";
export const SETTINGS_KEY = "settings";
export const ACCESS_TOKEN = "access_token";

export const fakeLocalStore = (initialStore?: {}) => {
  class FakeLocalStore implements Store {
    store: {
      [key: string]: string | object | boolean;
    };

    constructor(initialStore = {}) {
      this.store = initialStore;
    }

    getItem(key: string) {
      if (key in this.store) return this.store[key];
      return null;
    }

    setItem(key: string, value: string | object | boolean) {
      this.store[key] = value;
    }

    removeItem(key: string) {
      delete this.store[key];
    }
  }

  return new FakeLocalStore(initialStore);
};

export default function initLocalStore(localStorage: Storage) {
  class LocalStore implements Store {
    localStorage: Storage;

    constructor(initialStore: Storage) {
      this.localStorage = initialStore;
    }

    getItem(key: string) {
      const value = this.localStorage.getItem(key);
      try {
        if (value === null) return value;
        return JSON.parse(value);
      } catch (error) {
        return value;
      }
    }

    setItem(key: string, value: string | object | boolean) {
      if (typeof value === "string") {
        return this.localStorage.setItem(key, value);
      }
      if (typeof value === "object" || typeof value === "boolean") {
        return this.localStorage.setItem(key, JSON.stringify(value));
      }
    }

    removeItem(key: string) {
      return this.localStorage.removeItem(key);
    }
  }

  return new LocalStore(localStorage);
}
