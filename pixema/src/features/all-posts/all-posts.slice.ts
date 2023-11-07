import { createSlice } from '@reduxjs/toolkit';
import { AllPostsResponse } from './types';

const AllPostsSlice = createSlice({
  name: 'AllPosts',
  initialState: {
    allPosts: {} as AllPostsResponse,
    currentPage: 1,
    isLoading: false,
    newPosts: {} as AllPostsResponse,
  },
  reducers: {
    getAllPosts(state, action: { payload: { pages: [number, number] } }) {
      state.isLoading = true;
    },
    // getAllPosts(state, action: { payload: { page: number } }) {
    //   state.isLoading = true;
    // },
    getAllPostsSuccess(state, action: { payload: typeof state.allPosts }) {
      state.isLoading = false;
      state.allPosts = action.payload;
    },
    getAllPostsFailure(state) {
      state.isLoading = false;
    },
    changeCurrentPage(state) {
      state.currentPage = state.currentPage + 1;
      const newPosts = state.allPosts;
      state.newPosts = { ...newPosts, ...state.newPosts };
    },
  },
});

export const {
  actions: {
    getAllPosts,
    getAllPostsSuccess,
    getAllPostsFailure,
    changeCurrentPage,
  },
  reducer: AllPostsReducer,
} = AllPostsSlice;
