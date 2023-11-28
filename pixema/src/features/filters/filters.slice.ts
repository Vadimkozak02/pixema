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
    filtersCurrentPage: 0,
    filterIsActive: false,
    isFilterLoading: false,
    currentFilters: {
      order: 'RATING',
      keyword: '',
      ratingFrom: 0,
      ratingTo: 10,
      yearFrom: 1000,
      yearTo: 3000,
      page: 1,
    },
  },
  reducers: {
    getFilters(state, action: { payload: FilterRequest }) {
      state.isFilterLoading = true;
      state.currentFilters.order = action.payload.order;
      state.currentFilters.keyword = action.payload.keyword;
      state.currentFilters.ratingFrom = action.payload.ratingFrom;
      state.currentFilters.ratingTo = action.payload.ratingTo;
      state.currentFilters.yearFrom = action.payload.yearFrom;
      state.currentFilters.yearTo = action.payload.yearTo;
      state.currentFilters.page = action.payload.page;
    },
    getFiltersSuccess(state, action: { payload: FilterResponse }) {
      state.isFilterLoading = false;
      const itemsArr = [...state.filtersMovie.items, ...action.payload.items];
      state.filtersMovie = { ...action.payload, items: itemsArr };
      // state.filtersMovie = action.payload;
      console.log('filtersMovie', state.filtersMovie);
    },
    getFiltersFailure(state) {
      state.isFilterLoading = false;
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
    resetFiltersCurrentPage(state, action: { payload: number }) {
      state.filtersCurrentPage = action.payload;
    },
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
    resetFiltersCurrentPage,
  },
  reducer: FilterReducer,
} = FilterSlice;
