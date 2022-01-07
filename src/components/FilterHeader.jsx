import React from 'react';

function FilterHeader() {
  return (
    <div>
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
    </div>
  );
}

export default FilterHeader;
