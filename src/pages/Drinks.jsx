import React, { useContext } from 'react';
import AppCards from '../components/AppCards';
import Header from '../components/Header';
import MyContext from '../context/MyContext';

function Drinks() {
  const { result } = useContext(MyContext);

  const TWELVE = 12;

  if (result.length >= TWELVE) {
    result.splice(0, TWELVE + 1);
  }

  return (
    <div>
      <Header title="Bebidas" isRender />
      { result.map(({ strDrink, strDrinkThumb }, index) => (
        <AppCards key={ index } name={ strDrink } src={ strDrinkThumb } index={ index } />
      )) }
    </div>
  );
}

export default Drinks;
