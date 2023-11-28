import { takeLatest, call, put } from 'typed-redux-saga';
import {
  getRecommendationMovies,
  getRecommendationMoviesFailure,
  getRecommendationMoviesSuccess,
} from './recommendation-movies.slice';
import { api } from './api';

export function* recommendationMoviesSaga() {
  yield takeLatest(
    getRecommendationMovies,
    function* allPostsHundler({ payload: { page } }) {
      try {
        const data = yield* call(api.recommendationMovies, page);
        yield put(getRecommendationMoviesSuccess(data));
      } catch {
        yield put(getRecommendationMoviesFailure());
      }
    }
  );
}
