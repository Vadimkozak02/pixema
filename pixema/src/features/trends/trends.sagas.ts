import { call, put, takeLatest } from 'typed-redux-saga';
import {
  getTrendsMovie,
  getTrendsMovieFailure,
  getTrendsMovieSuccess,
} from './trends.slice';
import { api } from './api';

export function* TrendsSaga() {
  yield takeLatest(
    getTrendsMovie,
    function* trendsHundler({ payload: { page } }) {
      try {
        const data = yield* call(api.getTrendsMovies, page);
        yield put(getTrendsMovieSuccess(data));
      } catch {
        yield put(getTrendsMovieFailure());
      }
    }
  );
}
