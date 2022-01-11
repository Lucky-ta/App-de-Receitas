import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import FilterHeader from '../components/FilterHeader';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import { INTERVAL } from '../global/constants';

function FavoriteRecipes() {
  const [favRecipes, setFavRecipes] = useState([]);
  const [auxRender, setAuxRender] = useState(true);
  const [copied, setCopied] = useState(false);
  const [filterType, setFilterType] = useState('');

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
  }, [auxRender]);

  function copieLink(path) {
    const link = `http://localhost:3000/${path}`;
    copy(link);
    setCopied(true);
    setTimeout(() => { setCopied(false); }, INTERVAL);
  }

  function unfavoriteRecipe({ name }) {
    const newArr = favRecipes.filter((receita) => receita.name !== name);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newArr));
  }

  return (
    <div>
      <Header title="Receitas Favoritas" isRender={ false } />
      FavoriteRecipes Page
      <FilterHeader setFilterType={ setFilterType } />
      {favRecipes
        .filter((recipe) => recipe.type.includes(filterType))
        .map((recipe, index) => (
          <div key={ recipe.id }>
            <Link to={ `${recipe.type}s/${recipe.id}` }>
              <img
                width="150px"
                data-testid={ `${index}-horizontal-image` }
                src={ recipe.image }
                alt={ recipe.name }
              />
            </Link>
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
            <Link to={ `${recipe.type}s/${recipe.id}` }>
              <h3 data-testid={ `${index}-horizontal-name` }>
                {recipe.name}
              </h3>
            </Link>
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
            <input
              type="image"
              src={ blackHeartIcon }
              alt="blackHeartIcon"
              onClick={ () => {
                unfavoriteRecipe(recipe);
                setAuxRender(!auxRender);
              } }
              data-testid={ `${index}-horizontal-favorite-btn` }
            />
          </div>))}
    </div>
  );
}

export default FavoriteRecipes;
