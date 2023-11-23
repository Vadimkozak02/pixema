import { X_API_KEY, kinopoiskBaseUrl } from '../../api/constans';
import { KinopoinskAllPostsResponse } from '../all-posts/types';

export const api = {
  getTrendsMovies: (page: number): Promise<KinopoinskAllPostsResponse> => {
    return fetch(
      `${kinopoiskBaseUrl}api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=${page}`,
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
