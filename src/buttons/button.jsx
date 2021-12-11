import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BUTTON_CAT } from '../global/constants';
import foodApiToSelect from '../services/searchMeals';
import drinkApiToSelect from '../services/searchDrinks';
import MyContext from '../context/MyContext';

export default function Button({ categories }) {
  const history = useHistory();

  const { setResults, toogle, setToogle } = useContext(MyContext);

  async function clickHandler({ target }) {
    const { id } = target;
    if (history.location.pathname === '/comidas') {
      const fetchApi = async () => {
        const response = await foodApiToSelect('CATEGORIES', id);
        setToogle(!toogle);
        setResults(response.meals);
      };
      fetchApi();
    }
    if (history.location.pathname === '/bebidas') {
      const fetchApi = async () => {
        const response = await drinkApiToSelect('CATEGORIES', id);
        setResults(response.drinks);
        setToogle(!toogle);
      };
      fetchApi();
    }
  }

  const buttons = categories.filter((card, index) => index <= BUTTON_CAT);

  return (
    <div>
      <div>
        <input
          data-testid="All-category-filter"
          type="button"
          alt="All"
          value="All"
          onClick={ () => { setToogle(true); } }
        />
      </div>
      <div>
        { buttons.map(({ strCategory }, index) => (
          <input
            key={ index }
            data-testid={ `${strCategory}-category-filter` }
            type="button"
            id={ strCategory }
            alt={ strCategory }
            value={ strCategory }
            onClick={ clickHandler }
          />
        ))}
      </div>
    </div>
  );
}

Button.propTypes = {
  categories: PropTypes.oneOfType(
    (PropTypes.array, PropTypes.object, PropTypes.func, undefined),
  ).isRequired,
};
