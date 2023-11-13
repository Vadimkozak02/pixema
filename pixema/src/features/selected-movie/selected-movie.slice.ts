import { createSlice } from '@reduxjs/toolkit';
import {
  BoxOfficeOfMovie,
  ReleasesOfSelectedMovie,
  SelectedKinopoiskMovieReesponse,
} from './types';

export const SelectedMovieSlice = createSlice({
  name: 'SelectedMovieSlice',
  initialState: {
    selectedMovie: {} as SelectedKinopoiskMovieReesponse,
    releasesOfMovie: {} as ReleasesOfSelectedMovie,
    boxOfficeOfMovie: {} as BoxOfficeOfMovie,
    idSelectedMovie: 0,
    isLoading: false,
  },
  reducers: {
    setSelectedMovie(state, action: { payload: number }) {
      state.isLoading = true;
      state.idSelectedMovie = action.payload;
      console.log('action.payload', action.payload);
    },
    setSelectedMovieSuccess(
      state,
      action: { payload: SelectedKinopoiskMovieReesponse }
    ) {
      state.isLoading = false;
      state.selectedMovie = action.payload;
    },
    setSelectedMovieFailure(state) {
      state.isLoading = false;
    },
    getReleasesOfMovieSuccess(
      state,
      action: { payload: ReleasesOfSelectedMovie }
    ) {
      state.isLoading = false;
      state.releasesOfMovie = action.payload;
    },
    getReleasesOfMovieFailure(state) {
      state.isLoading = false;
    },
    getBoxOfficeOfMovieSuccess(state, action: { payload: BoxOfficeOfMovie }) {
      state.isLoading = false;
      state.boxOfficeOfMovie = action.payload;
    },
    getBoxOfficeOfMovieFailure(state) {
      state.isLoading = false;
    },
  },
});

export const {
  actions: {
    setSelectedMovie,
    setSelectedMovieSuccess,
    setSelectedMovieFailure,
    getReleasesOfMovieSuccess,
    getReleasesOfMovieFailure,
    getBoxOfficeOfMovieSuccess,
    getBoxOfficeOfMovieFailure,
  },
  reducer: SelectedMovieReducer,
} = SelectedMovieSlice;
