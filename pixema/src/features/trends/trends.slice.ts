import { createSlice } from '@reduxjs/toolkit';
import { KinopoinskAllPostsResponse } from '../all-posts/types';

const TrendsSlice = createSlice({
  name: 'TrendsSLice',
  initialState: {
    trendsMovie: {} as KinopoinskAllPostsResponse,
    currentPage: 1,
    isLoading: true,
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
      state.trendsMovie = action.payload;
    },
    getTrendsMovieFailure(state) {},
  },
});

export const {
  actions: { getTrendsMovie, getTrendsMovieSuccess, getTrendsMovieFailure },
  reducer: TrendsReducer,
} = TrendsSlice;
