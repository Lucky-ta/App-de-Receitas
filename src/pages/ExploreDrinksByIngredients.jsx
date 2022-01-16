import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import drinkApiToSelect from '../services/searchDrinks';
import IngredientsDrinksCards from '../components/IngredientsDrinksCards';
import { TWELVE } from '../global/constants';

const classObject = {
  headerProfilerContainer: 'header header-profile-container',
  profileIcon: 'profile-icon',
  headerTitleContainer: 'explore-by-area-title-container',
  headerTitle: 'explore-by-area-title header-title-profile',
  searchIcon: 'search-icon',
  searchContainer: 'search-field',
  headerSearchInṕutContainer: 'header-search-input-container',
  headerSearchInput: 'header-search-input form-label',
  radioBtnsContainer: 'radius-btns-field',
  radioButtons: 'radio-btn',
  headerSearchButton: 'header-search-btn',
};

function ExploreDrinksByIngredients() {
  const [ingredients, setIngredients] = useState([]);

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
      <Header title="Explorar Ingredientes" isRender={ false } classes={ classObject } />
      <IngredientsDrinksCards value={ firstsIngredients } />
      <Footer />
    </div>
  );
}

export default ExploreDrinksByIngredients;
