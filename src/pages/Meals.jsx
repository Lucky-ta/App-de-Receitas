import React from 'react';
import MealCards from '../cards/MealCards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MealsCategories from '../buttons/MealsCategories';
import { MAX_CARDS } from '../global/constants';
import '../App.css';

export default function Meals() {
  const recommendation = {
    isRecommendation: false,
    size: MAX_CARDS,
  };
  return (
    <div className="meals-body">
      <Header title="Comidas" isRender />
      <MealsCategories />
      <MealCards data={ recommendation } />
      <Footer />
    </div>
  );
}
