import React from 'react';

function IngredientsDrinksCards({ value }) {
  console.log(value);
  return (
    value.map((ingredient, index) => (
      <div
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
