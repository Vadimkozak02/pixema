import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export function useAuth() {
  const { email, token, id } = useAppSelector((state) => state.authorization);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
