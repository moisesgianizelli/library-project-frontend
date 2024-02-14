import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/NavbarAndFooter/Footer';
import { HomePage } from './layouts/NavbarAndFooter/HomePage/HomePage';

export const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};
