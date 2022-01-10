import React from 'react';
import PropTypes from 'prop-types';

function FilterHeader({ value }) {
  const {
    favRecipes,
    setIsFavorite,
    setFilterRecipes,
    auxRender,
    setAuxRender,
  } = value;

  function filterRecipes(type) {
    const recipesFiltered = favRecipes.filter((recipe) => recipe.type === type);
    setFilterRecipes(recipesFiltered);
    setIsFavorite(true);
    setAuxRender(!auxRender);
  }

  function clearFilters() {
    setFilterRecipes([]);
    setIsFavorite(false);
    setAuxRender(!auxRender);
  }

  return (
    <div>
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
  value: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FilterHeader;
