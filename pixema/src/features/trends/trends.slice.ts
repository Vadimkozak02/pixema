import { createSlice } from '@reduxjs/toolkit';
import { KinopoinskAllPostsResponse } from '../all-posts/types';

const TrendsSlice = createSlice({
  name: 'TrendsSLice',
  initialState: {
    trendsMovie: {
      total: 0,
      totalPages: 0,
      items: [],
    } as KinopoinskAllPostsResponse,
    currentPage: 2,
    isLoading: false,
  },
  reducers: {
    getTrendsMovie(state, action: { payload: { page: number } }) {
      state.isLoading = true;
    },
    getTrendsMovieSuccess(
      state,
      action: { payload: typeof state.trendsMovie }
    ) {
      state.isLoading = false;
      // const itemsArr = [...state.trendsMovie.items, ...action.payload.items];
      const totalPage = action.payload.totalPages;
      state.trendsMovie = { ...action.payload, totalPages: totalPage };
    },
    getTrendsMovieFailure(state) {
      state.isLoading = false;
    },
    changeCurrentPage(state) {
      state.currentPage = state.currentPage + 1;
    },
  },
});

export const {
  actions: {
    getTrendsMovie,
    getTrendsMovieSuccess,
    getTrendsMovieFailure,
    changeCurrentPage,
  },
  reducer: TrendsReducer,
} = TrendsSlice;
