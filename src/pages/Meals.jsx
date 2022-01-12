import React from 'react';
import MealCards from '../cards/MealCards';
import AllCategories from '../buttons/AllCategories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MealsCategories from '../buttons/MealsCategories';
import { MAX_CARDS } from '../global/constants';

export default function Meals() {
  const recommendation = {
    isRecommendation: false,
    size: MAX_CARDS,
  };
  return (
    <div>
      <Header title="Comidas" isRender />
      <AllCategories />
      <MealsCategories />
      <MealCards data={ recommendation } />
      <Footer />
    </div>
  );
}
