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
    value.map((ingredient, index) => (
      <div
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
        <h3 data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}</h3>
      </div>
    ))
  );
}

export default IngredientsDrinksCards;
