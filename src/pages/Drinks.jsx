import React from 'react';
import DrinkCards from '../cards/DrinkCards';
import AllCategories from '../buttons/AllCategories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DrinksCategories from '../buttons/DrinksCategories';

export default function Drinks() {
  return (
    <div>
      <Header title="Bebidas" isRender />
      <AllCategories />
      <DrinksCategories />
      <DrinkCards size={ 12 } />
      <Footer />
    </div>
  );
}
