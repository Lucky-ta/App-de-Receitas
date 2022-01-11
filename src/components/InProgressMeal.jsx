import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { INTERVAL } from '../global/constants';
import { getIngredient } from '../services/getIngredients';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function InProgressMeal({ recipe, url }) {
  const [copied, setCopied] = useState(false);
  const [favRecipes, setFavRecipes] = useState([]);

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

  // function addFavorite() {}

  function copieLink(path) {
    const link = `http://localhost:3000/${path}`;
    copy(link);
    setCopied(true);
    setTimeout(() => { setCopied(false); }, INTERVAL);
  }

  function isFavorite() {
    return favRecipes.some(({ id }) => id.toString() === recipe.idMeal);
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
      <span data-testid="recipe-category">{recipe.strCategory}</span>
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
      {isFavorite()
        ? (
          <input
            type="image"
            src={ blackHeartIcon }
            alt="blackHeartIcon"
            onClick={ () => {} }
            data-testid="favorite-btn"
          />)
        : (
          <input
            type="image"
            src={ whiteHeartIcon }
            alt="whiteHeartIcon"
            onClick={ () => {} }
            data-testid="favorite-btn"
          />
        )}
      <div>
        <h3>Ingredientes</h3>
        {getIngredient(recipe).map((ingredient, index) => (
          <label
            key={ `${index}-${ingredient}` }
            htmlFor={ `${index}-${ingredient}` }
          >
            <input
              type="checkbox"
              data-testid={ `${index}-ingredient-step` }
              id={ `${index}-${ingredient}` }
            />
            {ingredient}
          </label>
        ))}
      </div>
      <p data-testid="instructions">{recipe.strInstructions}</p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finalizar Receita
      </button>
    </main>
  );
}

InProgressMeal.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  url: PropTypes.string.isRequired,
};

export default InProgressMeal;
