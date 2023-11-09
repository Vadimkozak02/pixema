import { createSlice } from '@reduxjs/toolkit';

export const SiteMenuSlice = createSlice({
  name: 'SiteMenuSlice',
  initialState: {
    activeTab: null as string | null,
  },
  reducers: {
    setActiveTab(state, action: { payload: string }) {
      state.activeTab = action.payload;
    },
  },
});

export const {
  actions: { setActiveTab },
  reducer: SiteMenuReducer,
} = SiteMenuSlice;
