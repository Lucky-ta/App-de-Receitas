import React from 'react';
import MealCards from '../cards/MealCards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MealsCategories from '../components/MealsCategories';

function Meals() {
  return (
    <div>
      <Header title="Comidas" isRender />
      <MealsCategories />
      <MealCards />
      <Footer />
    </div>
  );
}

export default Meals;
