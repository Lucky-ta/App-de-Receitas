import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import InProgressDrink from '../components/InProgressDrink';
import drinkApiToSelect from '../services/searchDrinks';

function DrinksRecipesInProgress({ match }) {
  const { params: { id }, url } = match;
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    (async () => {
      const { drinks } = await drinkApiToSelect('ID', id);
      setRecipe(drinks[0]);
    })();
  }, [id, setRecipe]);

  return (
    <InProgressDrink recipe={ recipe } url={ url } />
  );
}

DrinksRecipesInProgress.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default DrinksRecipesInProgress;
