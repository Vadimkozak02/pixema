import { createSlice } from '@reduxjs/toolkit';
import { FilterRequest, FilterResponse } from './types';

export const FilterSlice = createSlice({
  name: 'FilterSlice',
  initialState: {
    filtersMovie: {
      total: 0,
      totalPages: 0,
      items: [],
    } as FilterResponse,
    filtersCurrentPage: 1,
    filterIsActive: false,
    isLoading: false,
    // moreFiltersMovie: {
    //   total: 0,
    //   totalPages: 0,
    //   items: [],
    // } as FilterResponse,
  },
  reducers: {
    getFilters(state, action: { payload: FilterRequest }) {
      state.isLoading = true;
    },
    getFiltersSuccess(state, action: { payload: FilterResponse }) {
      state.isLoading = false;
      // const itemsArr = [...state.filtersMovie.items, ...action.payload.items];
      // state.filtersMovie = { ...action.payload, items: itemsArr };
      state.filtersMovie = action.payload;
      // console.log('filtersMovie', state.filtersMovie);
    },
    getFiltersFailure(state) {
      state.isLoading = false;
    },
    resetFilter(state) {
      state.filtersMovie.items = [];
      state.filtersMovie.items.length = 0;
    },
    setFilterIsActive(state, action: { payload: boolean }) {
      state.filterIsActive = action.payload;
    },
    changeFiltersCurrentPage(state) {
      state.filtersCurrentPage = state.filtersCurrentPage + 1;
    },
    // getMoreFilterMovies(state, action: { payload: FilterResponse }) {
    //   state.isLoading = false;
    //   const itemsArr = [...state.filtersMovie.items, ...action.payload.items];
    //   state.moreFiltersMovie = { ...state.filtersMovie, items: itemsArr };
    // },
  },
});

export const {
  actions: {
    getFilters,
    getFiltersSuccess,
    getFiltersFailure,
    resetFilter,
    setFilterIsActive,
    changeFiltersCurrentPage,
    // getMoreFilterMovies,
  },
  reducer: FilterReducer,
} = FilterSlice;
