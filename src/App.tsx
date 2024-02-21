import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/NavbarAndFooter/Footer';
import { HomePage } from './layouts/NavbarAndFooter/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/search">
        <SearchBooksPage />
      </Route>
      <Footer />
    </div>
  );
};
