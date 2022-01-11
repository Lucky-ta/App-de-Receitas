import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import MyContext from '../context/MyContext';
import { INTERVAL } from '../global/constants';

function Buttons({ data }) {
  const { favorites, setFavorites } = useContext(MyContext);
  const { type } = data;
  console.log(data);
  const [copied, setCopied] = useState(false);

  function copieLink(path) {
    const link = `http://localhost:3000/${path}`;
    copy(link);
    setCopied(true);
    setTimeout(() => { setCopied(false); }, INTERVAL);
  }

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

  function gettingId() {
    if (type === 'comida') {
      const id = data.recipe.idMeal;
      return id;
    }
    const id = data.recipe.idDrink;
    return id;
  }

  const id = gettingId();

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

      {copied
        ? <span>Link copiado!</span>
        : (
          <input
            type="image"
            src={ shareIcon }
            alt="shareIcon"
            data-testid="share-btn"
            onClick={ () => copieLink(`${type}s/${id}`) }
          />
        )}

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
