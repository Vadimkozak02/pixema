import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AllPosts } from './features/all-posts/all-posts';
import { SelectedMovie } from './features/selected-movie/selected-movie';
import { FavoriteMovies } from './ui/favorite-movies/favorite-movies';
import { SettingsPage } from './ui/settings-page/settings-page';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import { Trends } from './features/trends/trends';
import { AuthorizationSuccessPage } from './pages/authorization-success';
import { NotFoundPage } from './ui/not-found-page/not-found-page';
import { Provider } from 'react-redux';
import { store } from './store';

function Root() {
  return (
    <Provider store={store}>
      <div className="App dark">
        <Routes>
          <Route path="/" element={<AllPosts />}></Route>
          <Route path="/:postId" element={<SelectedMovie />}></Route>
          <Route path="/trends" element={<Trends />}></Route>
          <Route path="/favorites" element={<FavoriteMovies />}></Route>
          <Route path="/settingsPage" element={<SettingsPage />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route
            path="/authorization-success"
            element={<AuthorizationSuccessPage />}
          ></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default Root;
