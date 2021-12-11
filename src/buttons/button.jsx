import React from 'react';
import { Link } from 'react-router-dom';

function Button({ categories }) {
  return (
    categories.map(({ strCategory }, index) => (
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
