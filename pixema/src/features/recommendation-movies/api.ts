import { kinopoiskBaseUrl, X_API_KEY } from '../../api/constans';
import { KinopoinskAllPostsResponse } from '../all-posts/types';

export const api = {
  recommendationMovies: (page: number): Promise<KinopoinskAllPostsResponse> => {
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
