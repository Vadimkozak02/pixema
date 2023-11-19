import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AllPosts } from './features/all-posts/all-posts';
import { SelectedMovie } from './features/selected-movie/selected-movie';
import { FavoriteMovies } from './ui/favorite-movies/favorite-movies';
import { SettingsPage } from './ui/settings-page/settings-page';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import { Filters } from './ui/filters/filters';
import { Trends } from './ui/trends/trends';

function Root() {
  return (
    <div className="App dark">
      <Routes>
        <Route path="/" element={<AllPosts />}></Route>
        <Route path="/:postId" element={<SelectedMovie />}></Route>
        <Route path="/trends" element={<Trends />}></Route>
        <Route path="/favorites" element={<FavoriteMovies />}></Route>
        <Route path="/settingsPage" element={<SettingsPage />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default Root;
