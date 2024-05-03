export const STORAGE = {
  LANGUAGE: 'LANGUAGE',
  USER_TOKEN: 'USER_TOKEN',
};

export function getLocalStorage(key: any) {
  return localStorage.getItem(key);
}

export function setLocalStorage(key: any, value: any) {
  return localStorage.setItem(key, value);
}

export function removeLocalStorage(key: any) {
  return localStorage.removeItem(key);
}
