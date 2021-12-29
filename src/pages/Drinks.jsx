import React from 'react';
import DrinkCards from '../cards/DrinkCards';
import DrinksCategories from '../components/DrinksCategories';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Drinks() {
  return (
    <div>
      <Header title="Bebidas" isRender />
      <DrinksCategories />
      <DrinkCards />
      <Footer />
    </div>
  );
}

export default Drinks;
