import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import foodApiToSelect from '../services/searchMeals';
import InProgressMeal from '../components/InProgressMeal';

function MealsRecipesInProgress({ match }) {
  const { params: { id }, url } = match;
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    (async () => {
      const { meals } = await foodApiToSelect('ID', id);
      setRecipe(meals[0]);
    })();
  }, [id, setRecipe]);

  return (
    <InProgressMeal recipe={ recipe } url={ url } />
  );
}

MealsRecipesInProgress.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MealsRecipesInProgress;
