import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function IngredientsCards({ ingredient, index,
  ingredientsUsed, setIngredientsUsed, id, checked }) {
  const [isChecked, setIsChecked] = useState(checked);
  console.log(isChecked);
  // useEffect(() => {
  //   const verify = ingredientsUsed.some((ingUsed) => ingUsed === ingredient);
  //   console.log(ingredientsUsed);
  //   if (verify) {
  //     setIsChecked(true);
  //   }
  // }, [ingredient, ingredientsUsed]);

  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const { meals } = inProgressRecipes;
  const { id: id2 } = useParams('id');
  const test = meals[id2];
  console.log(test);

  function handleChange() {
    if (ingredientsUsed.some((ingUsed) => ingUsed === ingredient)) {
      setIsChecked(false);
      const ingredientsChecked = ingredientsUsed
        .filter((ingUsed) => ingUsed !== ingredient);
      setIngredientsUsed([...ingredientsChecked]);
      const storage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      Object.assign(storage.meals, { [id]: ingredientsChecked });
      localStorage.setItem('inProgressRecipes', JSON.stringify(storage));
    } else {
      setIngredientsUsed([...ingredientsUsed, ingredient]);
      setIsChecked(true);
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
  id: PropTypes.number,
  checked: PropTypes.bool.isRequired,
};

IngredientsCards.defaultProps = {
  id: 0,
};

export default IngredientsCards;
