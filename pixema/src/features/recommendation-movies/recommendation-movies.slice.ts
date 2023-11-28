import { createSlice } from '@reduxjs/toolkit';
import { KinopoinskAllPostsResponse } from '../all-posts/types';

const RecommendationMoviesSlice = createSlice({
  name: 'RecommendationMoviesSlice',
  initialState: {
    recommendationMovies: {
      total: 0,
      totalPages: 0,
      items: [],
    } as KinopoinskAllPostsResponse,
    isLoading: false,
  },
  reducers: {
    getRecommendationMovies(state, action: { payload: { page: number } }) {
      state.isLoading = true;
    },
    getRecommendationMoviesSuccess(
      state,
      action: { payload: typeof state.recommendationMovies }
    ) {
      state.isLoading = false;
      state.recommendationMovies = action.payload;
    },
    getRecommendationMoviesFailure(state) {},
  },
});

export const {
  actions: {
    getRecommendationMovies,
    getRecommendationMoviesSuccess,
    getRecommendationMoviesFailure,
  },
  reducer: RecommendationMoviesReducer,
} = RecommendationMoviesSlice;
