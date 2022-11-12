import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ButtonPage1 from './pages/ButtonPage1';
import ButtonPage2 from './pages/ButtonPage2';
import ButtonPage3 from './pages/ButtonPage3';
import Navbar from './components/Navbar';

function PageRoutes() {
    return (
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/button-1"
            element={<ButtonPage1 />}
          />
          <Route
            path="/button-2"
            element={<ButtonPage2 />}
          />
          <Route
            path="/button-3"
            element={<ButtonPage3 />}
          />
        </Routes>
      </BrowserRouter>
    )
}

export default PageRoutes;
