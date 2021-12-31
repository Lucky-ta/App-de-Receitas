import React, { useContext } from 'react';
import { MAX_CATEGORIES_LENGHT } from '../global/constants';
import foodApiToSelect from '../services/searchMeals';

import MyContext from '../context/MyContext';

function MealsCategories() {
  const { mealsCategories, setMeals, meals, toggle, setToggle } = useContext(MyContext);

  async function logTest(category) {
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    const response = await fetch(URL);
    const json = await response.json();

    setToggle(!toggle);

    if (toggle === true) {
      const responsee = await foodApiToSelect('ALL');
      return setMeals(responsee.meals);
    } setMeals(json.meals);

    console.log();
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
