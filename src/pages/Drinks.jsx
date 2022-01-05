import React from 'react';
import DrinkCards from '../cards/DrinkCards';
import AllCategories from '../buttons/AllCategories';
import DrinksCategories from '../buttons/DrinksCategories';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Drinks() {
  return (
    <div>
      <Header title="Bebidas" isRender />
      <AllCategories />
      <DrinksCategories />
      <DrinkCards />
      <Footer />
    </div>
  );
}

export default Drinks;
