import React from 'react';
import PropTypes from 'prop-types';

function FilterHeader({ setFilterType }) {
  function filterRecipes(type) {
    setFilterType(type);
  }

  function clearFilters() {
    setFilterType('');
  }

  return (
    <div className="user-options">
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ clearFilters }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => filterRecipes('comida') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => filterRecipes('bebida') }
      >
        Drinks
      </button>
    </div>
  );
}

FilterHeader.propTypes = {
  setFilterType: PropTypes.func.isRequired,
};

export default FilterHeader;
