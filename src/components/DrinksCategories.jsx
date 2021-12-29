import React, { useContext } from 'react';

import MyContext from '../context/MyContext';
import { MAX_CATEGORIES_LENGHT } from '../global/constants';

function DrinksCategories() {
  const { drinksCategories } = useContext(MyContext);

  return (
    <div>
      {drinksCategories.slice(0, MAX_CATEGORIES_LENGHT).map(({ strCategory }, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${strCategory}-category-filter` }
        >
          { strCategory }
        </button>
      ))}
    </div>
  );
}

export default DrinksCategories;
