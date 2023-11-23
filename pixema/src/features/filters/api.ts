import { X_API_KEY } from '../../api/constans';
import { kinopoiskApi } from '../all-posts/api';
import { FilterRequest, FilterResponse } from './types';

export const api = {
  getFiltersArr: (payload: FilterRequest): Promise<FilterResponse> => {
    return fetch(
      `${kinopoiskApi}api/v2.2/films?order=${payload.order}&ratingFrom=${payload.ratingFrom}&ratingTo=${payload.ratingTo}&yearFrom=${payload.yearFrom}&yearTo=${payload.yearTo}&keyword=${payload.keyword}&page=1`,
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
