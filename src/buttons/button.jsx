import React from 'react';
import { Link } from 'react-router-dom';
import { BUTTON_CAT } from '../global/constants';

function Button({ categories }) {
  const buttons = categories.filter((card, index) => index <= BUTTON_CAT);

  return (
    buttons.map(({ strCategory }, index) => (
      <Link
        to="/"
        key={ index }
      >
        <input
          data-testid={ `${strCategory}-category-filter` }
          type="button"
          alt="searchIcon"
          value={ strCategory }
        />
      </Link>
    ))
  );
}

export default Button;
