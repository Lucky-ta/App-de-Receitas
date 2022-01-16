import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import drinkApiToSelect from '../services/searchDrinks';

const classObject = {
  headerProfilerContainer: 'profile-header header-profile-container',
  profileIcon: 'profile-profile-icon',
  headerTitleContainer: 'explore-meals-title-container',
  headerTitle: 'header-name header-title-profile',
  searchIcon: 'search-icon',
  searchContainer: 'search-field',
  headerSearchInṕutContainer: 'header-search-input-container',
  headerSearchInput: 'header-search-input form-label',
  radioBtnsContainer: 'radius-btns-field',
  radioButtons: 'radio-btn',
  headerSearchButton: 'header-search-btn',
};

function ExploreDrinks({ history }) {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    (async () => {
      const { drinks } = await drinkApiToSelect('RANDOM');
      setRandom(drinks[0].idDrink);
    })();
  }, []);

  function redirectToExplore(type, explore) {
    if (explore) {
      history.push(`/explorar/bebidas/${type}`);
    } else {
      history.push(`/bebidas/${type}`);
    }
  }
  return (
    <div>
      <Header title="Explorar Bebidas" isRender={ false } classes={ classObject } />
      <div className="user-options">
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => redirectToExplore('ingredientes', true) }
        >
          Por Ingredientes
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => redirectToExplore(random, false) }
        >
          Me Surpreenda!
        </button>
      </div>
      <Footer />
    </div>
  );
}

ExploreDrinks.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ExploreDrinks;
