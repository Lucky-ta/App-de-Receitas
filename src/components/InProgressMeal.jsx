import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { INTERVAL } from '../global/constants';
import { getIngredient } from '../services/getIngredients';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import IngredientsCards from '../cards/IngredientsCards';

function InProgressMeal({ recipe, url }) {
  const [copied, setCopied] = useState(false);
  const [favRecipes, setFavRecipes] = useState([]);
  const [auxRender, setAuxRender] = useState(true);
  const [ingredientsUsed, setIngredientsUsed] = useState([]);

  useEffect(() => {
    setFavRecipes(
      () => {
        if (localStorage.getItem('favoriteRecipes')) {
          const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
          return favoriteRecipes;
        }
        localStorage.setItem('favoriteRecipes', JSON.stringify(favRecipes));
        return [];
      },
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auxRender]);

  useEffect(() => {
    if (!localStorage.getItem('inProgressRecipes')) {
      const inProgressDefault = { cocktails: {}, meals: {} };
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressDefault));
    }
    setIngredientsUsed(
      () => {
        if (localStorage.getItem('inProgressRecipes')) {
          const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
          if (inProgressRecipes && recipe.idMeal in inProgressRecipes.meals) {
            const { meals } = inProgressRecipes;
            return meals[recipe.idMeal];
          }
          return [];
        }
        return [];
      },
    );
  }, [recipe.idMeal]);

  function copieLink(path) {
    const link = `http://localhost:3000/${path}`;
    copy(link);
    setCopied(true);
    setTimeout(() => { setCopied(false); }, INTERVAL);
  }

  function isFavorite() {
    return favRecipes.some(({ id }) => {
      if (typeof id === 'number') {
        return id.toString() === recipe.idMeal;
      }
      return id === recipe.idMeal;
    });
  }

  function addFavorite() {
    const newFavorite = [...favRecipes, recipe];
    setAuxRender(!auxRender);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorite));
  }

  function removeFavorite({ name }) {
    const rmFavorite = favRecipes.filter((receita) => receita.name !== name);
    setAuxRender(!auxRender);
    localStorage.setItem('favoriteRecipes', JSON.stringify(rmFavorite));
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
            onClick={ () => { removeFavorite(recipe); } }
            data-testid="favorite-btn"
          />)
        : (
          <input
            type="image"
            src={ whiteHeartIcon }
            alt="whiteHeartIcon"
            onClick={ addFavorite }
            data-testid="favorite-btn"
          />
        )}
      <div>
        <h3>Ingredientes</h3>
        {getIngredient(recipe).map((ingredient, index) => (
          <IngredientsCards
            key={ `${index}-${ingredient}` }
            ingredient={ ingredient }
            index={ index }
            ingredientsUsed={ ingredientsUsed }
            setIngredientsUsed={ setIngredientsUsed }
            checked={ ingredientsUsed.some((ingUsed) => ingUsed === ingredient) }
            id={ recipe.idMeal }
          />
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
