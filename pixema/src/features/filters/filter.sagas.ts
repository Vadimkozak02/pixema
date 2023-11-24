import { call, put, takeLatest } from 'typed-redux-saga';
import {
  getFilters,
  getFiltersFailure,
  getFiltersSuccess,
} from './filters.slice';
import { api } from './api';

export function* filterSaga() {
  yield takeLatest(getFilters, function* filtersHundler({ payload }) {
    try {
      const data = yield* call(api.getFiltersArr, payload);
      console.log('data', data);

      yield put(getFiltersSuccess(data));
    } catch {
      yield put(getFiltersFailure());
    }
  });
}
