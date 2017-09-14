export function hasLocalStorageUser() {
  let localStorageUser = false;
  for (const key in localStorage) {
    if (key.startsWith('firebase:authUser:')) {
      return localStorageUser = true;
    }
  }
  return localStorageUser;
}
