import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import foodApiToSelect from '../services/searchMeals';
import drinkApiToSelect from '../services/searchDrinks';
import { getMealsCategories, getDrinksCategories } from '../services/getCategories';

function Provider({ children }) {
  const recipesDone = ({
    meals: {},
    cocktails: {},
  });

  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [result, setResult] = useState([]);
  const [mealsCategories, setMealsCategories] = useState([]);
  const [drinksCategories, setDrinksCategories] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [cat, setCat] = useState('');
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [inProgress, setInProgress] = useState(recipesDone);

  const data = {
    meals,
    setMeals,
    drinks,
    setDrinks,
    result,
    setResult,
    mealsCategories,
    setMealsCategories,
    drinksCategories,
    setDrinksCategories,
    toggle,
    setToggle,
    cat,
    setCat,
    doneRecipes,
    setDoneRecipes,
    inProgress,
    setInProgress,
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const mealsResponse = await getMealsCategories();
      const drinksResponse = await getDrinksCategories();

      setMealsCategories(mealsResponse.meals);
      setDrinksCategories(drinksResponse.drinks);
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await foodApiToSelect('ALL');
      setMeals(response.meals);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await drinkApiToSelect('ALL');
      setDrinks(response.drinks);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    if (localStorage.doneRecipes) {
      setDoneRecipes(JSON.parse(localStorage.doneRecipes));
    } else {
      localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    }
  }, []);

  useEffect(() => {
    if (localStorage.inProgressRecipes) {
      setInProgress(JSON.parse(localStorage.inProgressRecipes));
    } else {
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    }
  }, []);

  return (
    <MyContext.Provider value={ data }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;
