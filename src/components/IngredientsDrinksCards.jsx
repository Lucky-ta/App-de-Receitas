import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import drinkApiToSelect from '../services/searchDrinks';

function IngredientsDrinksCards({ value }) {
  const history = useHistory();
  const { setDrinks } = useContext(MyContext);
  function handleClick(ingredient) {
    const fetchApi = async () => {
      const { drinks } = await drinkApiToSelect('INGREDIENT', ingredient);
      setDrinks(drinks);
    };
    fetchApi();
    history.push('/bebidas');
  }
  console.log(value);
  return (
    <div className="ingredients-container">
      {value.map((ingredient, index) => (
        <div
          className="ingredients-cards"
          role="button"
          tabIndex={ index }
          onClick={ () => handleClick(ingredient.strIngredient1) }
          onKeyPress={ () => handleClick(ingredient.strIngredient1) }
          data-testid={ `${index}-ingredient-card` }
          key={ `${index}${ingredient.strIngredient1}` }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png ` }
            alt={ ingredient.strIngredient1 }
          />
          <div className="ingredient-title-container">
            <h3
              className="ingredient-title"
              data-testid={ `${index}-card-name` }
            >
              {ingredient.strIngredient1}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

IngredientsDrinksCards.propTypes = {
  value: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default IngredientsDrinksCards;
