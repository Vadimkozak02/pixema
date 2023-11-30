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
    searchIsLoading: false,
    isCompleted: false,
  },
  reducers: {
    search(state, action: { payload: SearchRequest }) {
      state.searchIsLoading = true;
    },
    searchSuccess(state, action: { payload: SearchResponse }) {
      state.searchIsLoading = false;
      state.isCompleted = true;
      state.searchedPosts = action.payload;
    },
    searchFailure(state) {
      state.searchIsLoading = false;
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
