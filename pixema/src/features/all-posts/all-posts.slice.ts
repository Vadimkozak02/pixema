import { createSlice } from '@reduxjs/toolkit';
import { KinopoinskAllPostsResponse } from './types';

const AllPostsSlice = createSlice({
  name: 'AllPosts',
  initialState: {
    allPosts: {
      total: 0,
      totalPages: 0,
      items: [],
    } as KinopoinskAllPostsResponse,
    currentPage: 2,
    currentScroll: 1300,
    allPostsIsLoading: false,
  },
  reducers: {
    getAllPosts(state, action: { payload: { page: number } }) {
      state.allPostsIsLoading = true;
    },
    getAllPostsSuccess(state, action: { payload: typeof state.allPosts }) {
      state.allPostsIsLoading = false;
      const itemsArr = [...state.allPosts.items, ...action.payload.items];
      state.allPosts = { ...state.allPosts, items: itemsArr };
    },
    getAllPostsFailure(state) {
      state.allPostsIsLoading = false;
    },
    changeCurrentPage(state) {
      state.currentPage = state.currentPage + 1;
    },
    getCurrentScroll(state) {
      state.currentScroll += 1800;
    },
  },
});

export const {
  actions: {
    getAllPosts,
    getAllPostsSuccess,
    getAllPostsFailure,
    changeCurrentPage,
    getCurrentScroll,
  },
  reducer: AllPostsReducer,
} = AllPostsSlice;
