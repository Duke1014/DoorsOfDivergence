import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
// import { UserProvider } from './context/user';

export default function App() {

  return (
    // <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    // </UserProvider>
  )
}