import React, { useContext } from 'react';
import AppCards from '../components/AppCards';
import Header from '../components/Header';
import MyContext from '../context/MyContext';

function Drinks() {
  const { result } = useContext(MyContext);

  const TWELVE = 12;

  return (
    <div>
      <Header title="Bebidas" isRender />
      { result.slice(0, TWELVE).map(({ strDrink, strDrinkThumb }, index) => (
        <AppCards key={ index } name={ strDrink } src={ strDrinkThumb } index={ index } />
      )) }
    </div>
  );
}

export default Drinks;
