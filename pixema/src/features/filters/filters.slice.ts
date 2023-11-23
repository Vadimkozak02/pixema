import { createSlice } from '@reduxjs/toolkit';
import { FilterRequest, FilterResponse } from './types';

export const FilterSlice = createSlice({
  name: 'FilterSlice',
  initialState: {
    isLoading: false,
    filtersMovie: {} as FilterResponse,
  },
  reducers: {
    getFilters(state, action: { payload: FilterRequest }) {
      state.isLoading = true;
      console.log('action', action.payload);
    },
    getFiltersSuccess(state, action: { payload: FilterResponse }) {
      state.isLoading = false;
      state.filtersMovie = action.payload;
      console.log('filtersMovie', state.filtersMovie);
    },
    getFiltersFailure(state) {
      state.isLoading = false;
    },
  },
});

export const {
  actions: { getFilters, getFiltersSuccess, getFiltersFailure },
  reducer: FilterReducer,
} = FilterSlice;
