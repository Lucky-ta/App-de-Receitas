import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import MyContext from '../context/MyContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import pagesRequest from '../searchByPage/searchByPage';

function Header({ title, isRender }) {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState(false);

  const { setResult } = useContext(MyContext);
  const [ingredient, setIngredient] = useState(false);
  const [radioName, setRadioName] = useState(false);
  const [firstLetter, setFirstLetter] = useState(false);

  const history = useHistory();
  function profileRedirect() {
    history.push('/perfil');
  }

  async function onClickSearchButton() {
    if (history.location.pathname === '/comidas') {
      const { meals } = await pagesRequest
        .mealsResponse(ingredient, radioName, firstLetter, input);
      if (meals.length === 1) {
        const { idMeal } = meals[0];
        history.push(`/comidas/${idMeal}`);
      } else {
        setResult(meals);
      }
    }
    if (history.location.pathname === '/bebidas') {
      const { drinks } = await pagesRequest
        .drinkResponse(ingredient, radioName, firstLetter, input);
      if (drinks.length === 1) {
        const { idDrink } = drinks[0];
        history.push(`/bebidas/${idDrink}`);
      } else {
        setResult(drinks);
      }
    }
  }

  return (
    <div>
      <header>
        <input
          type="image"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profileIcon"
          onClick={ profileRedirect }
        />
        <h1 data-testid="page-title">{ title }</h1>
        { isRender && (
          <input
            data-testid="search-top-btn"
            type="image"
            src={ searchIcon }
            alt="searchIcon"
            onClick={ () => setSearch(!search) }
          />
        )}
        { search && (
          <div>
            <input
              data-testid="search-input"
              type="text"
              value={ input }
              onChange={ ({ target }) => setInput(target.value) }
            />

            <label htmlFor="ingredient-search-radio">
              Ingrediente
              <input
                name="radio-button"
                data-testid="ingredient-search-radio"
                id="ingredient-search-radio"
                type="radio"
                checked={ ingredient }
                onClick={ () => setIngredient(!ingredient) }
              />
            </label>
            <label htmlFor="name-search-radio">
              Nome
              <input
                name="radio-button"
                data-testid="name-search-radio"
                id="name-search-radio"
                type="radio"
                checked={ radioName }
                onClick={ () => setRadioName(!radioName) }
              />
            </label>
            <label htmlFor="first-letter-search-radio">
              Primeira letra
              <input
                name="radio-button"
                data-testid="first-letter-search-radio"
                id="first-letter-search-radio"
                type="radio"
                checked={ firstLetter }
                onClick={ () => setFirstLetter(!firstLetter) }
              />
            </label>
            <button
              data-testid="exec-search-btn"
              type="button"
              onClick={ onClickSearchButton }
            >
              Buscar

            </button>
          </div>
        )}

      </header>
    </div>
  );
}

Header.propTypes = {
  isRender: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
