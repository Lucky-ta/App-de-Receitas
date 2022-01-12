import React, { useContext } from 'react';
import drinkApiToSelect from '../services/searchDrinks';

import MyContext from '../context/MyContext';
import { MAX_CATEGORIES_LENGHT } from '../global/constants';

function DrinksCategories() {
  const { drinksCategories,
    setDrinks, drinks, toggle, setToggle, cat, setCat } = useContext(MyContext);

  async function filterByCategory(category) {
    setToggle(!toggle);
    setCat(category);

    if (toggle === true && cat === category) {
      const results = await drinkApiToSelect('ALL');
      return setDrinks(results.drinks);
    }
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
    const response = await fetch(URL);
    const json = await response.json();

    setDrinks(json.drinks);
    return drinks;
  }

  return (
    <div>
      {drinksCategories.slice(0, MAX_CATEGORIES_LENGHT).map(({ strCategory }, index) => (
        <button
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

export default DrinksCategories;
