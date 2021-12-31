import React, { useContext } from 'react';
import { MAX_CATEGORIES_LENGHT } from '../global/constants';

import MyContext from '../context/MyContext';

function MealsCategories() {
  const { mealsCategories, setMeals, meals } = useContext(MyContext);

  async function logTest(category) {
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    const response = await fetch(URL);
    const json = await response.json();

    setMeals(json.meals);
    return meals;
  }

  return (
    <div>
      {mealsCategories.slice(0, MAX_CATEGORIES_LENGHT).map(({ strCategory }, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${strCategory}-category-filter` }
          onClick={ () => logTest(strCategory) }
        >
          { strCategory }
        </button>
      ))}
    </div>
  );
}

export default MealsCategories;
