import React from 'react';
import DrinkCards from '../cards/DrinkCards';
import AllCategories from '../buttons/AllCategories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DrinksCategories from '../buttons/DrinksCategories';
import { MAX_CARDS } from '../global/constants';

export default function Drinks() {
  const recommendation = {
    isRecommendation: false,
    size: MAX_CARDS,
  };
  return (
    <div>
      <Header title="Bebidas" isRender />
      <AllCategories />
      <DrinksCategories />
      <DrinkCards data={ recommendation } />
      <Footer />
    </div>
  );
}
