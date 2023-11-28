import { createSlice } from '@reduxjs/toolkit';
import { SelectedKinopoiskMovieResponse } from '../../selected-movie/types';

export const addToFavoritesSlice = createSlice({
  name: 'addToFavoritesSlice',
  initialState: {
    arrofFavoritesMovie: [] as Array<SelectedKinopoiskMovieResponse>,
    idPage: 0,
    isAdded: false,
  },
  reducers: {
    addToFav(state, action: { payload: SelectedKinopoiskMovieResponse }) {
      let selectedMovie = action.payload;
      if (
        state.arrofFavoritesMovie.some(
          (el) => el.kinopoiskId === selectedMovie.kinopoiskId
        )
      ) {
        const index = state.arrofFavoritesMovie.findIndex(
          (item) => item.kinopoiskId === selectedMovie.kinopoiskId
        );
        if (index !== -1) {
          state.arrofFavoritesMovie.splice(index, 1);
        }
      } else {
        state.arrofFavoritesMovie.push(action.payload);
      }
    },
    addIdPage(state, action: { payload: number }) {
      state.idPage = action.payload;
    },
    isAddedToFav(state, action: { payload: boolean }) {
      state.isAdded = action.payload;
    },
  },
});

export const {
  actions: { addToFav, addIdPage, isAddedToFav },
  reducer: addToFavoritesReducer,
} = addToFavoritesSlice;
