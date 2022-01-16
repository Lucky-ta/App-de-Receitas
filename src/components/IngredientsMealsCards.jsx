import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import foodApiToSelect from '../services/searchMeals';
import MyContext from '../context/MyContext';
import '../css/categoriesBtns.css';
import '../css/exploreIngredients.css';

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
    <div className="ingredients-container">
      {value.map((ingredient, index) => (
        <div
          className="ingredients-cards"
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
          <div className="ingredient-title-container">
            <h3 className="ingredient-title" data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IngredientsMealsCards;
