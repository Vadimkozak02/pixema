import { all } from 'redux-saga/effects';
import { allPostsSaga } from './features/all-posts/all-posts.sagas';
import { selectedMovieSaga } from './features/selected-movie/selected-movie.sagas';
// 'typed-redux-saga'; - или мб вот это верное

export function* rootSaga() {
  yield all([allPostsSaga(), selectedMovieSaga()]);
}
