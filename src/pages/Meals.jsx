import React from 'react';
import MealCards from '../cards/MealCards';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Meals() {
  return (
    <div>
      <Header title="Comidas" isRender />
      <MealCards />
      <Footer />
    </div>
  );
}

export default Meals;
