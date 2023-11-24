import { X_API_KEY, kinopoiskBaseUrl } from '../../api/constans';
import { FilterRequest, FilterResponse } from './types';

export const api = {
  getFiltersArr: (payload: FilterRequest): Promise<FilterResponse> => {
    return fetch(
      `${kinopoiskBaseUrl}api/v2.2/films?order=${payload.order}&type=ALL&ratingFrom=${payload.ratingFrom}&ratingTo=${payload.ratingTo}&yearFrom=${payload.yearFrom}&yearTo=${payload.yearTo}&keyword=${payload.keyword}&page=${payload.page}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': X_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER_ERROR');
      }
      return response.json();
    });
  },
};
