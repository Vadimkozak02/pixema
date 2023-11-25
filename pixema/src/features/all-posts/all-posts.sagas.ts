import { takeLatest, call, put } from 'typed-redux-saga';
import {
  getAllPosts,
  getAllPostsFailure,
  getAllPostsSuccess,
  getRecommendationMovies,
} from './all-posts.slice';
import { kinopoiskApi } from './api';

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

// export function* allPostsSaga() {
//   yield takeLatest(
//     getAllPosts,
//     function* allPostsHundler({ payload: { page } }) {
//       try {
//         const data = yield* call(api.getAllPosts, page);
//         yield put(getAllPostsSuccess(data));
//       } catch {
//         yield put(getAllPostsFailure());
//       }
//     }
//   );
// }

// --------------------
//  Kinopoisk
// --------------------

export function* allPostsSaga() {
  yield takeLatest(
    getAllPosts,
    function* allPostsHundler({ payload: { page } }) {
      const recPage = 10;
      try {
        const data = yield* call(kinopoiskApi.getAllPosts, page);
        const recommendationMovies = yield* call(
          kinopoiskApi.recommendationMovies,
          recPage
        );
        yield put(getAllPostsSuccess(data));
        yield put(getRecommendationMovies(recommendationMovies));
      } catch {
        yield put(getAllPostsFailure());
      }
    }
  );
}
