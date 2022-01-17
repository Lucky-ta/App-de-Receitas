import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { INTERVAL } from '../global/constants';
import { getIngredient } from '../services/getIngredients';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import IngredientsCards from '../cards/IngredientsCards';
import ImageAndTitle from '../recipeDetailsComponents/ImageAndTitle';
import '../css/inProgress.css';

function InProgressMeal({ recipe, url }) {
  const [copied, setCopied] = useState(false);
  const [favRecipes, setFavRecipes] = useState([]);
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
  }, []);

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
    return favRecipes.some(({ id }) => id.toString() === recipe.idMeal);
  }

  return (
    <div className="progress-body">
      <main>
        <ImageAndTitle img={ recipe.strDrinkThumb } title={ recipe.strDrink } />
        <span
          className="details-category"
          data-testid="recipe-category"
        >
          {recipe.strCategory}
        </span>
        <div className="details-buttons-container">
          <div className="details-fav-btn-container">
            <input
              type="image"
              src={ isFavorite() ? blackHeartIcon : whiteHeartIcon }
              alt="blackHeartIcon"
              onClick={ () => {} }
              data-testid="favorite-btn"
            />
          </div>
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
        </div>
        <div className="progress-ingredients-container">
          <h3 className="ingredient-progress-title">Ingredientes</h3>
          <div className="ingredients-progress">
            {getIngredient(recipe).map((ingredient, index) => (
              <div
                className="ingredients-progress-cards"
                key={ `${index}-${ingredient}` }
              >
                <IngredientsCards
                  ingredient={ ingredient }
                  index={ index }
                  ingredientsUsed={ ingredientsUsed }
                  setIngredientsUsed={ setIngredientsUsed }
                  checked={ ingredientsUsed.some((ingUsed) => ingUsed === ingredient) }
                  id={ recipe.idDrink }
                />
              </div>
            ))}
          </div>
        </div>
        <h3 className="ingredient-progress-title">Instructions</h3>
        <div className="instructions-progress-container">
          <div className="instructions-progress-text">
            <p
              className="instructions-progress"
              data-testid="instructions"
            >
              {recipe.strInstructions}
            </p>
          </div>
        </div>
        <button
          className="finish-recipe-progress-btn"
          type="button"
          data-testid="finish-recipe-btn"
        >
          Finalizar Receita
        </button>
      </main>
    </div>
  );
}

InProgressMeal.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  url: PropTypes.string.isRequired,
};

export default InProgressMeal;
