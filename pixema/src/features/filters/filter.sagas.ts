import { call, put, takeLatest } from 'typed-redux-saga';
import {
  getFilters,
  getFiltersFailure,
  getFiltersSuccess,
} from './filters.slice';
import { api } from './api';

export function* FilterSaga() {
  yield takeLatest(getFilters, function* filtersHundler({ payload }) {
    try {
      const data = yield* call(api.getFiltersArr, payload);

      yield put(getFiltersSuccess(data));
    } catch {
      yield put(getFiltersFailure());
    }
  });
}
