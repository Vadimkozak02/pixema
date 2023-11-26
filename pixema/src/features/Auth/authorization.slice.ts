import { createSlice } from '@reduxjs/toolkit';

export type UserProps = {
  email: string | null;
  token: string;
  id: string;
};

const AuthorizationSlice = createSlice({
  name: 'AuthorizationSlice',
  initialState: {
    email: '',
    token: '',
    id: '',
    // password: null,
  } as UserProps,
  reducers: {
    setUser(state, action: { payload: UserProps }) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      // state.password = action.payload.password;
    },
    removeUser(state) {
      state.email = '';
      state.token = '';
      state.id = '';
      // state.password = null;
    },
  },
});

export const {
  actions: { setUser, removeUser },
  reducer: AuthorizationReducer,
} = AuthorizationSlice;
