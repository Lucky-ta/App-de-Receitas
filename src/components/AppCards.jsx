import PropTypes from 'prop-types';
import React from 'react';

function AppCards({ index, src, name }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img data-testid={ `${index}-card-img` } src={ src } alt={ name } />
      <span data-testid={ `${index}-card-name` }>{name}</span>
    </div>
  );
}

AppCards.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default AppCards;
