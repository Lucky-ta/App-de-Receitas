import React, { useContext } from 'react';
import MealCards from '../cards/MealCards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/MyContext';
import Button from '../buttons/button';

function Meals() {
  const { categories: { meals } } = useContext(MyContext);
  return (
    <div>
      <Header title="Comidas" isRender />
      <Button categories={ meals } />
      <MealCards />
      <Footer />
    </div>
  );
}

export default Meals;
