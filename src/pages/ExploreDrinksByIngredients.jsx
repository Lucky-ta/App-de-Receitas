import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import drinkApiToSelect from '../services/searchDrinks';
import IngredientsDrinksCards from '../components/IngredientsDrinksCards';

function ExploreDrinksByIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const TWELVE = 12;

  useEffect(() => {
    (async () => {
      const { drinks } = await drinkApiToSelect('allIngredients');
      setIngredients(drinks);
    })();
  }, []);

  const firstsIngredients = ingredients.slice(0, TWELVE);

  console.log(firstsIngredients);

  return (
    <div>
      <Header title="Explorar Ingredientes" isRender={ false } />
      <IngredientsDrinksCards value={ firstsIngredients } />
      <Footer />
    </div>
  );
}

export default ExploreDrinksByIngredients;
