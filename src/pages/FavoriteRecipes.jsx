import React, { useState } from 'react';
import copy from 'clipboard-copy';
import FilterHeader from '../components/FilterHeader';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { INTERVAL } from '../global/constants';

function FavoriteRecipes() {
  const favRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  console.log(favRecipes);
  const [isFavorite, setIsFavorite] = useState(false);
  const [copied, setCopied] = useState(false);

  function copieLink(path) {
    const link = `http://localhost:3000/${path}`;
    copy(link);
    setCopied(true);
    setTimeout(() => { setCopied(false); }, INTERVAL);
    // global.alert('Link copiado!');
  }

  function renderFavoriteRecipes() {
    return favRecipes.map((recipe, index) => (
      <div key={ recipe.id }>
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ recipe.image }
          alt={ recipe.name }
        />
        {recipe.type === 'comida'
          && (
            <p data-testid={ `${index}-horizontal-top-text` }>
              {`${recipe.area} - ${recipe.category}`}
            </p>)}
        {recipe.type === 'bebida'
          && (
            <p data-testid={ `${index}-horizontal-top-text` }>
              {`${recipe.alcoholicOrNot}`}
            </p>)}
        <h3 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h3>
        {copied
          ? <span>Link copiado!</span>
          : (
            <input
              type="image"
              src={ shareIcon }
              alt="shareIcon"
              data-testid={ `${index}-horizontal-share-btn` }
              onClick={ () => copieLink(`${recipe.type}s/${recipe.id}`) }
            />
          )}
        {!isFavorite
          ? (
            <input
              type="image"
              src={ blackHeartIcon }
              alt="blackHeartIcon"
              onClick={ () => setIsFavorite(false) }
              data-testid={ `${index}-horizontal-favorite-btn` }
            />)
          : (
            <input
              type="image"
              src={ whiteHeartIcon }
              alt="whiteHeartIcon"
              onClick={ () => setIsFavorite(true) }
              data-testid={ `${index}-horizontal-favorite-btn` }
            />)}
      </div>
    ));
  }

  return (
    <div>
      <Header title="Receitas Favoritas" isRender={ false } />
      FavoriteRecipes Page
      <FilterHeader />
      {renderFavoriteRecipes()}
    </div>
  );
}

export default FavoriteRecipes;
