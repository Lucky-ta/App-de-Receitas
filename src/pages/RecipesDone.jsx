import copy from 'clipboard-copy';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FilterHeader from '../components/FilterHeader';
import Header from '../components/Header';
import { INTERVAL } from '../global/constants';
import shareIcon from '../images/shareIcon.svg';

const classObject = {
  headerProfilerContainer: 'profile-header header-profile-container',
  profileIcon: 'profile-profile-icon',
  headerTitleContainer: 'done-recipes-title-container',
  headerTitle: 'header-name header-title-profile',
  searchIcon: 'search-icon',
  searchContainer: 'search-field',
  headerSearchInṕutContainer: 'header-search-input-container',
  headerSearchInput: 'header-search-input form-label',
  radioBtnsContainer: 'radius-btns-field',
  radioButtons: 'radio-btn',
  headerSearchButton: 'header-search-btn',
};

function RecipesDone() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  // const [auxRender, setAuxRender] = useState(true);
  const [copied, setCopied] = useState(false);
  const [filterType, setFilterType] = useState('');
  console.log(doneRecipes);

  useEffect(() => {
    setDoneRecipes(
      () => {
        if (localStorage.getItem('doneRecipes')) {
          const dnRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
          return dnRecipes;
        }
        return [];
      },
    );
  }, []);

  function copieLink(path) {
    const link = `http://localhost:3000/${path}`;
    copy(link);
    setCopied(true);
    setTimeout(() => { setCopied(false); }, INTERVAL);
  }

  return (
    <div>
      <Header title="Receitas Feitas" isRender={ false } classes={ classObject } />
      <FilterHeader setFilterType={ setFilterType } />
      {doneRecipes
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
            <p data-testid={ `${index}-horizontal-done-date` }>
              Feita em:
              {' '}
              { recipe.doneDate }
            </p>
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
            {recipe.tags.slice(0, 2)
              .map((tag, i) => (
                <div key={ `${tag}-${i}` }>
                  <span data-testid={ `${index}-${tag}-horizontal-tag` }>{tag}</span>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
}

export default RecipesDone;
