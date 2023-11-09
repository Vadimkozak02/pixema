import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SingInForm } from './features/sign-in/sign-in-form';
import { AuthTemplate } from './ui/template/auth-template';
import { AllPosts } from './features/all-posts/all-posts';
import { MovieCard } from './ui/movie-card/movie-card';
import { SelectedMovie } from './features/selected-movie/selected-movie';

function Root() {
  return (
    <div className="App dark">
      <Routes>
        {/* <Route path="/" element={< />}></Route> */}
        <Route path="/" element={<AllPosts />}></Route>
        <Route path="/sign-in" element={<SingInForm />}></Route>
        <Route path="/:postId" element={<SelectedMovie />}></Route>
        <Route
          path="/auth"
          element={<AuthTemplate title={'hi'} body={'body'} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default Root;
