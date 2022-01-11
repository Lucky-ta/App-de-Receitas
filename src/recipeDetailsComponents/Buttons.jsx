import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import MyContext from '../context/MyContext';

function Buttons({ data }) {
  const { favorites, setFavorites } = useContext(MyContext);
  const { type } = data;

  function addFavorites() {
    if (type === 'comida') {
      const { recipe: { idMeal, strArea, strCategory, strMeal, strMealThumb } } = data;
      const recipes = {
        id: idMeal,
        type,
        area: strArea,
        category: strCategory,
        alcoholicOrNot: '',
        name: strMeal,
        image: strMealThumb,
      };
      const isFavoriteMeal = favorites.some((obj) => obj.id === idMeal);
      if (!isFavoriteMeal) {
        setFavorites([...favorites, recipes]);
        const favoritesToLocal = ([...favorites, recipes]);
        localStorage.setItem('favoriteRecipes', JSON.stringify(favoritesToLocal));
      } else {
        const removeFavorite = favorites.filter((obj) => obj.id !== idMeal);
        setFavorites(removeFavorite);
        const favoritesToLocal = (removeFavorite);
        localStorage.setItem('favoriteRecipes', JSON.stringify(favoritesToLocal));
      }
    } else {
      const { recipe: {
        idDrink, strDrink, strCategory, strDrinkThumb, strAlcoholic,
      } } = data;
      const recipes = {
        id: idDrink,
        type,
        area: '',
        category: strCategory,
        alcoholicOrNot: strAlcoholic,
        name: strDrink,
        image: strDrinkThumb,
      };
      const isFavoriteDrink = favorites.some((obj) => obj.id === idDrink);
      console.log(isFavoriteDrink);
      if (!isFavoriteDrink) {
        setFavorites([...favorites, recipes]);
        const favoritesToLocal = ([...favorites, recipes]);
        localStorage.setItem('favoriteRecipes', JSON.stringify(favoritesToLocal));
      } else {
        const removeFavorite = favorites.filter((obj) => obj.id !== idDrink);
        setFavorites(removeFavorite);
        const favoritesToLocal = (removeFavorite);
        localStorage.setItem('favoriteRecipes', JSON.stringify(favoritesToLocal));
      }
    }
  }

  function isFavorite() {
    if (type === 'comida') {
      const { recipe: { idMeal } } = data;
      const isFavoriteMeal = favorites.some((obj) => obj.id === idMeal);
      return isFavoriteMeal;
    }
    const { recipe: { idDrink } } = data;
    const isFavoriteDrink = favorites.some((obj) => obj.id === idDrink);
    return isFavoriteDrink;
  }

  return (
    <div>
      <button
        type="button"
        onClick={ addFavorites }
      >
        <img
          src={ isFavorite() ? blackHeartIcon : whiteHeartIcon }
          alt="blackHeartIcon"
          data-testid="favorite-btn"
        />
      </button>

      <button
        type="button"
      >
        <img
          src={ shareIcon }
          alt="shareIcon"
          data-testid="share-btn"
        />
      </button>

    </div>
  );
}

Buttons.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string,
    recipe: PropTypes.oneOfType(
      PropTypes.string, PropTypes.object,
    ),
  }).isRequired,
};

export default Buttons;
