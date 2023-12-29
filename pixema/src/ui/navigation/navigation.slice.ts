import { createSlice } from '@reduxjs/toolkit';

export const NavigationSlice = createSlice({
  name: 'NavigationSlice',
  initialState: {
    isOpen: true,
  },
  reducers: {
    setIsOpen(state, action: { payload: boolean }) {
      state.isOpen = action.payload;
    },
  },
});

export const {
  actions: { setIsOpen },
  reducer: NavigationReducer,
} = NavigationSlice;
