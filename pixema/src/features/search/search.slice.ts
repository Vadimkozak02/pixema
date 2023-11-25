import { createSlice } from '@reduxjs/toolkit';
import { SearchRequest, SearchResponse } from './types';

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    searchedPosts: {
      keyword: '',
      pagesCount: 0,
      films: [],
      searchFilmsCountResult: 0,
    } as SearchResponse,
    searchedText: '',
    searchCurrentPage: 1,
    isInProgress: false,
    isCompleted: false,
  },
  reducers: {
    search(state, action: { payload: SearchRequest }) {
      state.isInProgress = true;
    },
    searchSuccess(state, action: { payload: SearchResponse }) {
      state.isInProgress = false;
      state.isCompleted = true;
      state.searchedPosts = action.payload;
    },
    searchFailure(state) {
      state.isInProgress = false;
    },
    setSearchedText(state, action: { payload: string }) {
      state.searchedText = action.payload;
    },
    reset(state) {
      state.searchedText = '';
      state.searchedPosts.films = [];
    },
    changeSearchCurrentPage(state) {
      state.searchCurrentPage = state.searchCurrentPage + 1;
    },
  },
});

export const {
  actions: {
    search,
    searchSuccess,
    searchFailure,
    setSearchedText,
    reset,
    changeSearchCurrentPage,
  },
  reducer: searchReducer,
} = searchSlice;
