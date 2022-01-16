import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import foodApiToSelect from '../services/searchMeals';
import IngredientsMealsCards from '../components/IngredientsMealsCards';
import { TWELVE } from '../global/constants';

const classObject = {
  headerProfilerContainer: 'profile-header header-profile-container',
  profileIcon: 'profile-profile-icon',
  headerTitleContainer: 'explore-meals-by-ingredient-title-container',
  headerTitle: 'explore-meals-by-ingredient-title header-title-profile',
  searchIcon: 'search-icon',
  searchContainer: 'search-field',
  headerSearchInṕutContainer: 'header-search-input-container',
  headerSearchInput: 'header-search-input form-label',
  radioBtnsContainer: 'radius-btns-field',
  radioButtons: 'radio-btn',
  headerSearchButton: 'header-search-btn',
};

function ExploreMealsByIngredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    (async () => {
      const { meals } = await foodApiToSelect('allIngredients');
      setIngredients(meals);
    })();
  }, []);

  const firstsIngredients = ingredients.slice(0, TWELVE);

  return (
    <div>
      <Header title="Explorar Ingredientes" isRender={ false } classes={ classObject } />
      <IngredientsMealsCards value={ firstsIngredients } />
      <Footer />
    </div>
  );
}

export default ExploreMealsByIngredients;
