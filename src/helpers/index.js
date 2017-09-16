export function hasLocalStorageUser() {
  let localStorageUser = false;
  for (const key in localStorage) {
    if (key.startsWith('firebase:authUser:')) {
      return localStorageUser = true;
    }
  }
  return localStorageUser;
}

export function readEmailFromLocalStorage() {
  let email;
  for (const key in localStorage) {
    if (key.startsWith('firebase:authUser:')) {
      const data = JSON.parse(localStorage.getItem(key));
      return data.email;
    }
  }
  return email;
}
