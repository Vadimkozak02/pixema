import { X_API_KEY, kinopoiskBaseUrl } from '../../api/constans';
import { SearchRequest, SearchResponse } from './types';

export const api = {
  search: (payload: SearchRequest): Promise<SearchResponse> => {
    return fetch(
      kinopoiskBaseUrl +
        `api/v2.1/films/search-by-keyword?keyword=${payload.search}&page=${payload.page}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': X_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER_ERROE');
      }
      return response.json();
    });
  },
};
