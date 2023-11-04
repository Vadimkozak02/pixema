import { createSlice } from '@reduxjs/toolkit';
import { AllPostsResponse } from './types';

const AllPostsSlice = createSlice({
  name: 'AllPosts',
  initialState: {
    allPosts: {} as AllPostsResponse,
    isLoading: false,
  },
  reducers: {
    getAllPosts(state, action: { payload: { pages: [number, number] } }) {
      state.isLoading = true;
    },
    getAllPostsSuccess(state, action: { payload: typeof state.allPosts }) {
      state.isLoading = false;
      state.allPosts = action.payload;
    },
    getAllPostsFailure(state) {
      state.isLoading = false;
    },
  },
});

export const {
  actions: { getAllPosts, getAllPostsSuccess, getAllPostsFailure },
  reducer: AllPostsReducer,
} = AllPostsSlice;
