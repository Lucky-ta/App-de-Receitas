import PropTypes from 'prop-types';
import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/inProgress.css';

function IngredientsCards({ ingredient, index,
  ingredientsUsed, setIngredientsUsed, id }) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const { meals } = inProgressRecipes;
  const { id: id2 } = useParams('id');
  const test = meals[id2];

  function handleChange() {
    if (ingredientsUsed.some((ingUsed) => ingUsed === ingredient)) {
      const ingredientsChecked = ingredientsUsed
        .filter((ingUsed) => ingUsed !== ingredient);
      setIngredientsUsed([...ingredientsChecked]);
      const storage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      Object.assign(storage.meals, { [id]: ingredientsChecked });
      localStorage.setItem('inProgressRecipes', JSON.stringify(storage));
    } else {
      setIngredientsUsed([...ingredientsUsed, ingredient]);
      const storage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      Object.assign(storage.meals, { [id]: [...ingredientsUsed, ingredient] });
      localStorage.setItem('inProgressRecipes', JSON.stringify(storage));
    }
  }

  return (
    <label
      htmlFor={ `${index}-${ingredient}` }
      data-testid={ `${index}-ingredient-step` }
    >
      <input
        className="radio-progress"
        type="checkbox"
        id={ `${index}-${ingredient}` }
        checked={ test && test.some((ingUsed) => ingUsed === ingredient) }
        onChange={ handleChange }
      />
      {ingredient}
    </label>
  );
}

IngredientsCards.propTypes = {
  index: PropTypes.number.isRequired,
  ingredient: PropTypes.string.isRequired,
  ingredientsUsed: PropTypes.arrayOf(PropTypes.any).isRequired,
  setIngredientsUsed: PropTypes.func.isRequired,
  id: PropTypes.string,
};

IngredientsCards.defaultProps = {
  id: '',
};

export default IngredientsCards;
