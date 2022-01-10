import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import foodApiToSelect from '../services/searchMeals';
import MyContext from '../context/MyContext';

function IngredientsMealsCards({ value }) {
  const { setMeals } = useContext(MyContext);
  const history = useHistory();
  function handleClick(ingredient) {
    const fetchApi = async () => {
      const { meals } = await foodApiToSelect('INGREDIENT', ingredient);
      setMeals(meals);
    };
    fetchApi();
    history.push('/comidas');
  }
  console.log(value);
  return (
    value.map((ingredient, index) => (
      <div
        role="button"
        tabIndex={ index }
        onClick={ () => handleClick(ingredient.strIngredient) }
        onKeyPress={ () => handleClick(ingredient.strIngredient) }
        data-testid={ `${index}-ingredient-card` }
        key={ ingredient.idIngredient }
      >
        <img
          data-testid={ `${index}-card-img` }
          src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
          alt={ ingredient.strDescription }
        />
        <h3 data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</h3>
      </div>
    ))
  );
}

export default IngredientsMealsCards;
