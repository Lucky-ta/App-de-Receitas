import React, { useContext } from 'react';
import { MAX_CATEGORIES_LENGHT } from '../global/constants';

import MyContext from '../context/MyContext';

function MealsCategories() {
  const { mealsCategories } = useContext(MyContext);

  return (
    <div>
      {mealsCategories.slice(0, MAX_CATEGORIES_LENGHT).map(({ strCategory }, index) => (
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

export default MealsCategories;
