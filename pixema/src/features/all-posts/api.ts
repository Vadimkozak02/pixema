import { X_API_KEY, kinopoiskBaseUrl } from '../../api/constans';
import { AllPostsResponse, KinopoinskAllPostsResponse } from './types';

export const kinopoiskApi = {
  getAllPosts: (page: number): Promise<KinopoinskAllPostsResponse> => {
    return fetch(
      `${kinopoiskBaseUrl}api/v2.2/films/collections?type=TOP_250_MOVIES&page=${page}`,
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
  recommendationMovies: (
    recPage: number
  ): Promise<KinopoinskAllPostsResponse> => {
    return fetch(
      `${kinopoiskBaseUrl}api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=${recPage}`,
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
