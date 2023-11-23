import { X_API_KEY, kinopoiskBaseUrl } from '../../api/constans';
import { AllPostsResponse, KinopoinskAllPostsResponse } from './types';

// export const api = {
//   getAllPosts: (page: number): Promise<AllPostsResponse> => {
//     return fetch(
//       `https://www.omdbapi.com/?s=one&apiKey=3709edfe&page=${page}&limit=50`,
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//         },
//       }
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error('SERVER_ERROR');
//       }
//       return response.json();
//     });
//   },
// };

// export const api = {
//   getAllPosts: (page: number): Promise<AllPostsResponse> => {
//     return fetch(
//       `https://www.omdbapi.com/?s=love&apiKey=3709edfe&page=${page}&limit=50`,
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//         },
//       }
//     ).then((response) => {
//       if (!response.ok) {
//         throw new Error('SERVER_ERROR');
//       }
//       return response.json();
//     });
//   },
// };

// ---------------------
// Kinopoisk
// ---------------------

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
};
