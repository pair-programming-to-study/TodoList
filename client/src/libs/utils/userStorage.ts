const USER_STORAGE_KEY = 'userAuth';

const userStorage = {
  get() {
    const token = localStorage.getItem(USER_STORAGE_KEY);
    try {
      if (!token) return null;
      const parsedtoken = JSON.parse(token) as string;
      return parsedtoken;
    } catch (e) {
      localStorage.removeItem(USER_STORAGE_KEY);
      return null;
    }
  },
  set(token: string) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(token));
  },
  remove() {
    localStorage.removeItem(USER_STORAGE_KEY);
  },
};

export default userStorage;
