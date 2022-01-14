import React, { useContext } from 'react';
import { MAX_CATEGORIES_LENGHT } from '../global/constants';
import foodApiToSelect from '../services/searchMeals';
import AllCategories from './AllCategories';
import '../css/categoriesBtns.css';
import MyContext from '../context/MyContext';

function MealsCategories() {
  const { mealsCategories,
    setMeals, meals, toggle, setToggle, cat, setCat } = useContext(MyContext);

  async function filterByCategory(category) {
    setToggle(!toggle);
    setCat(category);

    if (toggle === true && cat === category) {
      const results = await foodApiToSelect('ALL');
      return setMeals(results.meals);
    }
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    const response = await fetch(URL);
    const json = await response.json();

    setMeals(json.meals);
    return meals;
  }

  return (
    <div
      className="categories-field"

    >
      <AllCategories />
      {mealsCategories.slice(0, MAX_CATEGORIES_LENGHT).map(({ strCategory }, index) => (
        <button
          className="categories-buttons"
          id={ strCategory }
          type="button"
          key={ index }
          data-testid={ `${strCategory}-category-filter` }
          onClick={ () => filterByCategory(strCategory) }
        >
          { strCategory }
        </button>
      ))}
    </div>
  );
}

export default MealsCategories;
