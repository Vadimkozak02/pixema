import { call, put, takeLatest } from 'typed-redux-saga';
import {
  getBoxOfficeOfMovieFailure,
  getBoxOfficeOfMovieSuccess,
  getReleasesOfMovieFailure,
  getReleasesOfMovieSuccess,
  getStaffFailure,
  getStaffSuccess,
  setSelectedMovie,
  setSelectedMovieFailure,
  setSelectedMovieSuccess,
} from './selected-movie.slice';
import { api } from './api';

export function* selectedMovieSaga() {
  yield takeLatest(
    setSelectedMovie,
    function* selectedMovieHundler({ payload: kinopoiskId }) {
      try {
        const data = yield* call(api.getSelectedMovie, kinopoiskId);
        const releases = yield* call(api.getReleasesMovie, kinopoiskId);
        const boxOffice = yield* call(api.getBoxOfficeOfMovie, kinopoiskId);
        const staff = yield* call(api.getStaffOfMOvie, kinopoiskId);
        yield put(setSelectedMovieSuccess(data));
        yield put(getReleasesOfMovieSuccess(releases));
        yield put(getBoxOfficeOfMovieSuccess(boxOffice));
        yield put(getStaffSuccess([staff]));
      } catch {
        yield put(setSelectedMovieFailure());
        yield put(getReleasesOfMovieFailure());
        yield put(getBoxOfficeOfMovieFailure());
        yield put(getStaffFailure());
      }
    }
  );
}
