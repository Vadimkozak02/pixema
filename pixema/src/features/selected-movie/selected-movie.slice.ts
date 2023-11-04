import { createSlice } from '@reduxjs/toolkit';
import { SelectedMovieResponse } from './types';

export const SelectedMovieSlice = createSlice({
  name: 'SelectedMovieSlice',
  initialState: {
    selectedMovie: {} as SelectedMovieResponse,
    isLoading: false,
  },
  reducers: {
    setSelectedMovie(state, action: { payload: { imdbID: string } }) {
      state.isLoading = true;
      console.log(action.payload);
    },
    setSelectedMovieSuccess(state, action: { payload: SelectedMovieResponse }) {
      state.isLoading = false;
      state.selectedMovie = action.payload;
    },
    setSelectedMovieFailure(state) {
      state.isLoading = false;
    },
  },
});

export const {
  actions: {
    setSelectedMovie,
    setSelectedMovieSuccess,
    setSelectedMovieFailure,
  },
  reducer: SelectedMovieReducer,
} = SelectedMovieSlice;
