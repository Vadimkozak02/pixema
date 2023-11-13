import { X_API_KEY, kinopoiskBaseUrl } from '../../api/constans';
import {
  BoxOfficeOfMovie,
  ReleasesOfSelectedMovie,
  SelectedKinopoiskMovieReesponse,
} from './types';

export const api = {
  getSelectedMovie: (
    kinopoiskId: number
  ): Promise<SelectedKinopoiskMovieReesponse> => {
    return fetch(kinopoiskBaseUrl + `api/v2.2/films/${kinopoiskId}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': X_API_KEY,
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER_ERROR');
      }
      return response.json();
    });
  },
  getReleasesMovie: (kinopoiskId: number): Promise<ReleasesOfSelectedMovie> => {
    return fetch(
      kinopoiskBaseUrl + `api/v2.2/films/${kinopoiskId}/distributions`,
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
  getBoxOfficeOfMovie: (kinopoiskId: number): Promise<BoxOfficeOfMovie> => {
    return fetch(
      kinopoiskBaseUrl + `api/v2.2/films/${kinopoiskId}/box_office`,
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
