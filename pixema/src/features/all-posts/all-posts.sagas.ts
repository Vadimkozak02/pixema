import { takeLatest, call, put } from 'typed-redux-saga';
import {
  getAllPosts,
  getAllPostsFailure,
  getAllPostsSuccess,
} from './all-posts.slice';
import { api } from './api';

// export function* allPostsSaga() {
//   yield takeLatest(
//     getAllPosts,
//     function* allPostsHundler({
//       payload: {
//         pages: [onePage, twoPage],
//       },
//     }) {
//       try {
//         const dataOne = yield* call(api.getAllPosts, onePage);
//         const dataTwo = yield* call(api.getAllPosts, twoPage);
//         const dataOneSearch = dataOne.Search.concat(dataTwo.Search);
//         const data = {
//           ...dataOne,
//           Search: dataOneSearch,
//         };
//         yield put(getAllPostsSuccess(data));
//       } catch {
//         yield put(getAllPostsFailure());
//       }
//     }
//   );
// }

export function* allPostsSaga() {
  yield takeLatest(
    getAllPosts,
    function* allPostsHundler({ payload: { page } }) {
      try {
        const data = yield* call(api.getAllPosts, page);
        yield put(getAllPostsSuccess(data));
      } catch {
        yield put(getAllPostsFailure());
      }
    }
  );
}
