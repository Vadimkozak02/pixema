import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SingInForm } from './features/sign-in/sign-in-form';
import { AuthTemplate } from './ui/template/auth-template';

function Root() {
  return (
    <div className="App dark">
      <Routes>
        {/* <Route path="/" element={< />}></Route> */}
        <Route path="/sign-in" element={<SingInForm />}></Route>
        <Route
          path="/auth"
          element={<AuthTemplate title={'hi'} body={'body'} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default Root;
