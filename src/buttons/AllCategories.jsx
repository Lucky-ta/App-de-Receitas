import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import drinkApiToSelect from '../services/searchDrinks';
import foodApiToSelect from '../services/searchMeals';

function AllCategories() {
  const { setMeals, setDrinks } = useContext(MyContext);
  const history = useHistory();

  async function filterAllCategories() {
    if (history.location.pathname === '/comidas') {
      const { meals } = await foodApiToSelect('ALL');
      setMeals(meals);
    }
    if (history.location.pathname === '/bebidas') {
      const { drinks } = await drinkApiToSelect('ALL');
      setDrinks(drinks);
    }
  }

  return (
    <button
      className="categories-buttons"
      type="button"
      onClick={ () => filterAllCategories() }
      data-testid="All-category-filter"
    >
      All
    </button>
  );
}

export default AllCategories;
