import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Header from '../components/Header';
import AppCards from '../components/AppCards';

function Meals() {
  const { result } = useContext(MyContext);

  const TWELVE = 12;

  if (result.length >= TWELVE) {
    result.splice(0, TWELVE + 1);
  }

  return (
    <div>
      <Header title="Comidas" isRender />
      { result.map(({ strMeal, strMealThumb }, index) => (
        <AppCards key={ index } name={ strMeal } src={ strMealThumb } index={ index } />
      )) }
    </div>
  );
}

export default Meals;
