import React, { useContext } from 'react';
import Button from '../buttons/button';
import DrinkCards from '../cards/DrinkCards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/MyContext';

function Drinks() {
  const { categories: { drinks } } = useContext(MyContext);

  return (
    <div>
      <Header title="Bebidas" isRender />
      <Button categories={ drinks } />
      <DrinkCards />
      <Footer />
    </div>
  );
}

export default Drinks;
