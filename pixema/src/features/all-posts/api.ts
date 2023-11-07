import { AllPostsResponse } from './types';

export const api = {
  getAllPosts: (page: number): Promise<AllPostsResponse> => {
    return fetch(
      `https://www.omdbapi.com/?s=one&apiKey=3709edfe&page=${page}&limit=50`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
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
