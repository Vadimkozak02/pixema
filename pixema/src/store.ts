import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { AllPostsReducer } from './features/all-posts/all-posts.slice';
import { SelectedMovieReducer } from './features/selected-movie/selected-movie.slice';
import { SiteMenuReducer } from './ui/site-menu/site-menu.slice';
import { addToFavoritesReducer } from './features/all-posts/addToFavorites/addToFavorites.slice';
import { TrendsReducer } from './features/trends/trends.slice';
import { searchReducer } from './features/search/search.slice';
import { FilterReducer } from './features/filters/filters.slice';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    addToFav: addToFavoritesReducer,
    allPosts: AllPostsReducer,
    filter: FilterReducer,
    trendsPosts: TrendsReducer,
    search: searchReducer,
    selectedMovie: SelectedMovieReducer,
    tabsMenu: SiteMenuReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
