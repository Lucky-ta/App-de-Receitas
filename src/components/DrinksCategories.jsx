import React, { useContext } from 'react';
import drinkApiToSelect from '../services/searchDrinks';

import MyContext from '../context/MyContext';
import { MAX_CATEGORIES_LENGHT } from '../global/constants';

function DrinksCategories() {
  const { drinksCategories, setDrinks, toggle, setToggle } = useContext(MyContext);

  async function logTest(category) {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
    const response = await fetch(URL);
    const json = await response.json();

    setToggle(!toggle);

    if (toggle === true) {
      const responsee = await drinkApiToSelect('ALL');
      return setDrinks(responsee.drinks);
    } setDrinks(json.drinks);
  }

  return (
    <div>
      {drinksCategories.slice(0, MAX_CATEGORIES_LENGHT).map(({ strCategory }, index) => (
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

export default DrinksCategories;
