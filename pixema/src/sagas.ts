import { all } from 'redux-saga/effects';
// 'typed-redux-saga'; - или мб вот это верное

export function* rootSaga() {
  yield all([]);
}
