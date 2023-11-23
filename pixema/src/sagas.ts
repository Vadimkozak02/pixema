import { all } from 'redux-saga/effects';
import { allPostsSaga } from './features/all-posts/all-posts.sagas';
import { selectedMovieSaga } from './features/selected-movie/selected-movie.sagas';
import { TrendsSaga } from './features/trends/trends.sagas';
import { searchSaga } from './features/search/search.sagas';
import { FilterSaga } from './features/filters/filter.sagas';
// 'typed-redux-saga'; - или мб вот это верное

export function* rootSaga() {
  yield all([
    allPostsSaga(),
    FilterSaga(),
    TrendsSaga(),
    searchSaga(),
    selectedMovieSaga(),
  ]);
}
