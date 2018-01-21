import { hasLocalStorageUser, readEmailFromLocalStorage } from '../../helpers/index';

beforeEach(() =>{
  localStorage.clear();
});

afterEach(() =>{
  localStorage.clear();
});

it('should check if user exist in localStorage', () => {
  expect(hasLocalStorageUser()).toEqual(true);
});

it('should read user email from localStorage', () => {
  const email = 'test@test.com';
  const user = JSON.stringify({ email });
  localStorage.setItem('firebase:authUser:', user);
  expect(readEmailFromLocalStorage()).toEqual(email);
});
