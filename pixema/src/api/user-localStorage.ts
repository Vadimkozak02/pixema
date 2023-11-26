import { UserProps } from '../features/Auth/authorization.slice';

export function setUserLS(payload: UserProps) {
  localStorage.setItem('user', JSON.stringify(payload));
}

export function getUserLS() {
  const value = localStorage.getItem('user');
  if (value) {
    return JSON.parse(value);
  }
  return null;
}
