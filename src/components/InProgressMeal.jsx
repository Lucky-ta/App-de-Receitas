import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import shareIcon from '../images/shareIcon.svg';
import { INTERVAL } from '../global/constants';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function InProgressMeal({ recipe, url }) {
  const [copied, setCopied] = useState(false);
  const [favRecipes, setFavRecipes] = useState([]);
  console.log(recipe);

  function copieLink(path) {
    const link = `http://localhost:3000/${path}`;
    copy(link);
    setCopied(true);
    setTimeout(() => { setCopied(false); }, INTERVAL);
  }

  useEffect(() => {
    setFavRecipes(
      () => {
        if (localStorage.getItem('favoriteRecipes')) {
          const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
          return favoriteRecipes;
        }
        return [];
      },
    );
  }, []);

  function isFavorite() {
    return favRecipes.some(({ id }) => id === recipe.id);
  }

  return (
    <main>
      <img
        data-testid="recipe-photo"
        width="200px"
        src={ recipe.strMealThumb }
        alt={ recipe.srtMeal }
      />
      <h1 data-testid="recipe-title">{recipe.strMeal}</h1>
      {copied
        ? <span>Link copiado!</span>
        : (
          <input
            type="image"
            src={ shareIcon }
            alt="shareIcon"
            data-testid="share-btn"
            onClick={ () => copieLink(url) }
          />
        )}
      {isFavorite() ? <p>olá</p> : <p>oi</p>}
    </main>
  );
}

InProgressMeal.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default InProgressMeal;
