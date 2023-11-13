import { call, put, takeLatest } from 'typed-redux-saga';
import {
  getBoxOfficeOfMovieFailure,
  getBoxOfficeOfMovieSuccess,
  getReleasesOfMovieFailure,
  getReleasesOfMovieSuccess,
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
        yield put(setSelectedMovieSuccess(data));
        yield put(getReleasesOfMovieSuccess(releases));
        yield put(getBoxOfficeOfMovieSuccess(boxOffice));
      } catch {
        yield put(setSelectedMovieFailure());
        yield put(getReleasesOfMovieFailure());
        yield put(getBoxOfficeOfMovieFailure());
      }
    }
  );
}
