import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import MyContext from '../context/MyContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import foodApiToSelect from '../services/searchMeals';
import drinkApiToSelect from '../services/searchDrinks';

function Header({ title, isRender }) {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState(false);

  const { setMeals, setDrinks } = useContext(MyContext);

  const [ingredient, setIngredient] = useState(false);
  const [radioName, setRadioName] = useState(false);
  const [firstLetter, setFirstLetter] = useState(false);

  const [radio, setRadio] = useState('');

  const history = useHistory();
  function profileRedirect() {
    history.push('/perfil');
  }

  function handlerRadioInput({ target }) {
    setRadio(target.id);
  }

  async function onClickSearchButton() {
    if (history.location.pathname === '/comidas') {
      if (input.length > 1 && radio === 'FIRST_LETTER') {
        return global.alert('Sua busca deve conter somente 1 (um) caracter');
      }
      const fetchApi = async () => {
        const response = await foodApiToSelect(radio, input);
        setMeals(response.meals);
      };
      fetchApi();
    }
    if (history.location.pathname === '/bebidas') {
      if (input.length > 1 && radio === 'FIRST_LETTER') {
        return global.alert('Sua busca deve conter somente 1 (um) caracter');
      }
      const fetchApi = async () => {
        const response = await drinkApiToSelect(radio, input);
        setDrinks(response.drinks);
      };
      fetchApi();
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
            <label htmlFor="INGREDIENT">
              Ingrediente
              <input
                name="radio-button"
                data-testid="ingredient-search-radio"
                id="INGREDIENT"
                type="radio"
                checked={ ingredient }
                onClick={ () => setIngredient(!ingredient) }
                onChange={ handlerRadioInput }
              />
            </label>
            <label htmlFor="NAME">
              Nome
              <input
                name="radio-button"
                data-testid="name-search-radio"
                id="NAME"
                type="radio"
                checked={ radioName }
                onClick={ () => setRadioName(!radioName) }
                onChange={ handlerRadioInput }
              />
            </label>
            <label htmlFor="FIRST_LETTER">
              Primeira letra
              <input
                name="radio-button"
                data-testid="first-letter-search-radio"
                id="FIRST_LETTER"
                type="radio"
                checked={ firstLetter }
                onClick={ () => setFirstLetter(!firstLetter) }
                onChange={ handlerRadioInput }
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
        <h1 data-testid="page-title">{ title }</h1>
      </header>
    </div>
  );
}

Header.propTypes = {
  isRender: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
