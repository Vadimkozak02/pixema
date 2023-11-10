import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SingInForm } from './features/sign-in/sign-in-form';
import { AuthTemplate } from './ui/templates/auth-template/auth-template';
import { AllPosts } from './features/all-posts/all-posts';
import { SelectedMovie } from './features/selected-movie/selected-movie';
import { FavoriteMovies } from './ui/favorite-movies/favorite-movies';
import { SettingsPage } from './ui/settings-page/settings-page';

function Root() {
  return (
    <div className="App dark">
      <Routes>
        <Route path="/" element={<AllPosts />}></Route>
        <Route path="/sign-in" element={<SingInForm />}></Route>
        <Route path="/:postId" element={<SelectedMovie />}></Route>
        <Route path="/favorites" element={<FavoriteMovies />}></Route>
        <Route path="/settingsPage" element={<SettingsPage />}></Route>
        <Route
          path="/auth"
          element={<AuthTemplate title={'hi'} body={'body'} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default Root;
