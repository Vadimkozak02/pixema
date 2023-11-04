import { baseUrl } from '../../api/constans';
import { SelectedMovieResponse } from './types';

export const api = {
  getSelectedMovie: (imdbID: string): Promise<SelectedMovieResponse> => {
    return fetch(baseUrl + `&i=${imdbID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER_ERROR');
      }
      return response.json();
    });
  },
};
