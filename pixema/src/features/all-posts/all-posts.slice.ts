import { createSlice } from '@reduxjs/toolkit';
import { AllPostsResponse, KinopoinskAllPostsResponse } from './types';

// const AllPostsSlice = createSlice({
//   name: 'AllPosts',
//   initialState: {
//     allPosts: {} as AllPostsResponse,
//     currentPage: 1,
//     isLoading: false,
//     newPosts: {} as AllPostsResponse,
//   },
//   reducers: {
//     // getAllPosts(state, action: { payload: { pages: [number, number] } }) {
//     //   state.isLoading = true;
//     // },
//     getAllPosts(state, action: { payload: { page: number } }) {
//       state.isLoading = true;
//     },
//     getAllPostsSuccess(state, action: { payload: typeof state.allPosts }) {
//       state.isLoading = false;
//       state.allPosts = action.payload;
//     },
//     getAllPostsFailure(state) {
//       state.isLoading = false;
//     },
//     changeCurrentPage(state) {
//       state.currentPage = state.currentPage + 1;
//     },
//   },
// });

// export const {
//   actions: {
//     getAllPosts,
//     getAllPostsSuccess,
//     getAllPostsFailure,
//     changeCurrentPage,
//   },
//   reducer: AllPostsReducer,
// } = AllPostsSlice;

// -------------
// Kinopoisk
// -------------

const AllPostsSlice = createSlice({
  name: 'AllPosts',
  initialState: {
    allPosts: {
      total: 0,
      totalPages: 0,
      items: [],
    } as KinopoinskAllPostsResponse,
    currentPage: 1,
    isLoading: false,
  },
  reducers: {
    getAllPosts(state, action: { payload: { page: number } }) {
      state.isLoading = true;
    },
    getAllPostsSuccess(state, action: { payload: typeof state.allPosts }) {
      state.isLoading = false;
      const itemsArr = [...state.allPosts.items, ...action.payload.items];
      state.allPosts = { ...state.allPosts, items: itemsArr };
    },
    getAllPostsFailure(state) {
      state.isLoading = false;
    },
    changeCurrentPage(state) {
      state.currentPage = state.currentPage + 1;
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
