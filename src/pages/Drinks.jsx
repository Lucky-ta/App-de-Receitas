import React from 'react';
import DrinkCards from '../cards/DrinkCards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DrinksCategories from '../buttons/DrinksCategories';
import { MAX_CARDS } from '../global/constants';
import '../App.css';

export default function Drinks() {
  const recommendation = {
    isRecommendation: false,
    size: MAX_CARDS,
  };
  return (
    <div className="meals-body">
      <Header title="Bebidas" isRender />
      <DrinksCategories />
      <DrinkCards data={ recommendation } />
      <Footer />
    </div>
  );
}
