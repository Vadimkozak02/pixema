import { call, put, takeLatest } from 'typed-redux-saga';
import { search, searchFailure, searchSuccess } from './search.slice';
import { api } from './api';

export function* searchSaga() {
  yield takeLatest(search, function* searchHundler({ payload }) {
    const data = yield* call(api.search, payload);

    if (data) {
      yield put(searchSuccess(data));
    } else {
      yield put(searchFailure());
    }
  });
}
