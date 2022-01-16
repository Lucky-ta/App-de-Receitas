import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import MyContext from '../context/MyContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import foodApiToSelect from '../services/searchMeals';
import drinkApiToSelect from '../services/searchDrinks';
import '../css/header.css';

function Header({ title, isRender, classes }) {
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
        <div className={ classes.headerProfilerContainer }>
          <input
            type="image"
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="profileIcon"
            onClick={ profileRedirect }
            className={ classes.profileIcon }
          />
          <div className={ classes.headerTitleContainer }>
            <h1
              data-testid="page-title"
              className={ classes.headerTitle }
            >
              { title }

            </h1>
          </div>
          { isRender && (
            <input
              data-testid="search-top-btn"
              type="image"
              src={ searchIcon }
              alt="searchIcon"
              onClick={ () => setSearch(!search) }
              className={ classes.searchIcon }
            />
          )}
        </div>
        { search && (
          <div className={ classes.searchContainer }>
            <div className={ classes.headerSearchInṕutContainer }>
              <input
                className={ classes.headerSearchInput }
                data-testid="search-input"
                type="text"
                value={ input }
                onChange={ ({ target }) => setInput(target.value) }
                placeholder="Digitie alguma receita..."
              />
            </div>
            <div className={ classes.radioBtnsContainer }>
              <label className={ classes.radioButtons } htmlFor="INGREDIENT">
                <input
                  className={ classes.radioButtons }
                  name="radio-button"
                  data-testid="ingredient-search-radio"
                  id="INGREDIENT"
                  type="radio"
                  checked={ ingredient }
                  onClick={ () => setIngredient(!ingredient) }
                  onChange={ handlerRadioInput }
                />
                Ingrediente
              </label>
              <label className={ classes.radioButtons } htmlFor="NAME">
                <input
                  name="radio-button"
                  data-testid="name-search-radio"
                  id="NAME"
                  type="radio"
                  checked={ radioName }
                  onClick={ () => setRadioName(!radioName) }
                  onChange={ handlerRadioInput }
                />
                Nome
              </label>
              <label className={ classes.radioButtons } htmlFor="FIRST_LETTER">
                <input
                  name="radio-button"
                  data-testid="first-letter-search-radio"
                  id="FIRST_LETTER"
                  type="radio"
                  checked={ firstLetter }
                  onClick={ () => setFirstLetter(!firstLetter) }
                  onChange={ handlerRadioInput }
                />
                Primeira letra
              </label>
            </div>
            <div className={ classes.headerSearchButton }>
              <button
                className={ classes.headerSearchButton }
                data-testid="exec-search-btn"
                type="button"
                onClick={ onClickSearchButton }
              >
                Buscar
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.shape({
    headerProfilerContainer: PropTypes.string,
    headerSearchButton: PropTypes.string,
    headerSearchInṕutContainer: PropTypes.string,
    headerSearchInput: PropTypes.string,
    headerTitle: PropTypes.string,
    headerTitleContainer: PropTypes.string,
    profileIcon: PropTypes.string,
    radioBtnsContainer: PropTypes.string,
    radioButtons: PropTypes.string,
    searchContainer: PropTypes.string,
    searchIcon: PropTypes.string,
  }).isRequired,
  isRender: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
