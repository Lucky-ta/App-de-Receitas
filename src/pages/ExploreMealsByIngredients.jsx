import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import foodApiToSelect from '../services/searchMeals';
import IngredientsMealsCards from '../components/IngredientsMealsCards';

function ExploreMealsByIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const TWELVE = 12;

  useEffect(() => {
    (async () => {
      const { meals } = await foodApiToSelect('allIngredients');
      setIngredients(meals);
    })();
  }, []);

  const firstsIngredients = ingredients.slice(0, TWELVE);

  console.log(firstsIngredients);
  return (
    <div>
      <Header title="Explorar Ingredientes" isRender={ false } />
      <IngredientsMealsCards value={ firstsIngredients } />
      <Footer />
    </div>
  );
}

export default ExploreMealsByIngredients;
