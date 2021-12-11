import React from 'react';
import { BUTTON_CAT } from '../global/constants';
import foodApiToSelect from '../services/searchMeals';
import drinkApiToSelect from '../services/searchDrinks';

function Button({ categories }) {

  function clickHandler() {
    const fetchApi = async () => {
      if (history.pathname === '/comidas') {
        const response = await foodApiToSelect('ALL');
        setMeals(response.meals);
      }

      const response = await foodApiToSelect('ALL');
      setMeals(response.meals);
    };
  }

  const buttons = categories.filter((card, index) => index <= BUTTON_CAT);
  return (
    buttons.map(({ strCategory }, index) => (
      <input
        key={ index }
        data-testid={ `${strCategory}-category-filter` }
        type="button"
        alt={ strCategory }
        value={ strCategory }
      />
    ))
  );
}

export default Button;
