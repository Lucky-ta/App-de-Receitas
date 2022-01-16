import PropTypes from 'prop-types';
import React from 'react';

function Ingredients({ ingredients }) {
  return (
    <div className="details-ingredients-container">
      {ingredients.map((ingredient, index) => ingredient !== false && (
        <ul
          className="details-list"
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          <li>{ ingredient }</li>
        </ul>
      ))}
    </div>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default Ingredients;
