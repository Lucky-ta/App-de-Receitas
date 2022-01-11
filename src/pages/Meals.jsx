import React from 'react';
import MealCards from '../cards/MealCards';
import AllCategories from '../buttons/AllCategories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MealsCategories from '../buttons/MealsCategories';
import { MAX_CARDS } from '../global/constants';

export default function Meals() {
  return (
    <div>
      <Header title="Comidas" isRender />
      <AllCategories />
      <MealsCategories />
      <MealCards size={ MAX_CARDS } />
      <Footer />
    </div>
  );
}
