import { takeLatest, call, put } from 'typed-redux-saga';
import {
  getAllPosts,
  getAllPostsFailure,
  getAllPostsSuccess,
} from './all-posts.slice';
import { kinopoiskApi } from './api';

export function* allPostsSaga() {
  yield takeLatest(
    getAllPosts,
    function* allPostsHundler({ payload: { page } }) {
      try {
        const data = yield* call(kinopoiskApi.getAllPosts, page);
        yield put(getAllPostsSuccess(data));
      } catch {
        yield put(getAllPostsFailure());
      }
    }
  );
}
