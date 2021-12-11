import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BUTTON_CAT } from '../global/constants';
import foodApiToSelect from '../services/searchMeals';
import drinkApiToSelect from '../services/searchDrinks';
import MyContext from '../context/MyContext';

export default function Button({ categories }) {
  const history = useHistory();
  const { setMeals, setDrinks } = useContext(MyContext);

  function clickHandler(categorie) {
    // let api = [];
    // if (history.location.pathname === '/comidas') {
    //   const fetchApi = async () => {
    //     const response = await foodApiToSelect('CATEGORIES', categorie);
    //     console.log(response);
    //     setMeals(response.meals);
    //     api = response;
    //     return fetchApi;
    //   };
    // }
    // if (history.location.pathname === '/bebidas') {
    //   const fetchApi = async () => {
    //     const response = await drinkApiToSelect('CATEGORIES', categorie);
    //     setDrinks(response.drinks);
    //     api = response;
    //     return fetchApi;
    //   };
    // }
    return console.log(categorie);
  }

  const buttons = categories.filter((card, index) => index <= BUTTON_CAT);

  return (
    <div>
      { buttons.map(({ strCategory }, index) => (
        <input
          key={ index }
          data-testid={ `${strCategory.split(' ').splice('/')}-category-filter` }
          type="button"
          alt={ strCategory }
          value={ strCategory }
          onClick={ clickHandler(strCategory) }
        />
      ))}
    </div>

  );
}

Button.propTypes = {
  categories: PropTypes.oneOfType(
    (PropTypes.array, PropTypes.object, PropTypes.func),
  ).isRequired,
};
