import { call, put, takeLatest } from 'typed-redux-saga';
import {
  setSelectedMovie,
  setSelectedMovieFailure,
  setSelectedMovieSuccess,
} from './selected-movie.slice';
import { api } from './api';

export function* selectedMovieSaga() {
  yield takeLatest(
    setSelectedMovie,
    function* selectedMovieHundler({ payload: { imdbID } }) {
      try {
        const data = yield* call(api.getSelectedMovie, imdbID);
        yield put(setSelectedMovieSuccess(data));
      } catch {
        yield put(setSelectedMovieFailure());
      }
    }
  );
}
