import { createSlice } from '@reduxjs/toolkit';
import {
  BoxOfficeOfMovie,
  ReleasesOfSelectedMovie,
  SelectedKinopoiskMovieResponse,
  StaffOfMovie,
} from './types';

export const SelectedMovieSlice = createSlice({
  name: 'SelectedMovieSlice',
  initialState: {
    selectedMovie: {} as SelectedKinopoiskMovieResponse,
    releasesOfMovie: {} as ReleasesOfSelectedMovie,
    boxOfficeOfMovie: {} as BoxOfficeOfMovie,
    staffOfMovie: [] as StaffOfMovie[],
    idSelectedMovie: Number(localStorage.getItem('id')),
    isLoading: true,
  },
  reducers: {
    setSelectedMovie(state, action: { payload: number }) {
      state.isLoading = true;
      state.idSelectedMovie = action.payload;
    },
    setSelectedMovieSuccess(
      state,
      action: { payload: SelectedKinopoiskMovieResponse }
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
    getStaffSuccess(state, action: { payload: StaffOfMovie[] }) {
      state.isLoading = false;
      state.staffOfMovie = action.payload;
    },
    getStaffFailure(state) {
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
    getStaffSuccess,
    getStaffFailure,
  },
  reducer: SelectedMovieReducer,
} = SelectedMovieSlice;
