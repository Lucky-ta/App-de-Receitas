import React from 'react';

function IngredientsMealsCards({ value }) {
  console.log(value);
  return (
    value.map((ingredient, index) => (
      <div
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
