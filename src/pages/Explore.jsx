import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/explore.css';

const classObject = {
  headerProfilerContainer: 'profile-header header-profile-container',
  profileIcon: 'profile-profile-icon',
  headerTitleContainer: 'explore-header-title-container',
  headerTitle: 'header-name header-title-profile',
  searchIcon: 'search-icon',
  searchContainer: 'search-field',
  headerSearchInṕutContainer: 'header-search-input-container',
  headerSearchInput: 'header-search-input form-label',
  radioBtnsContainer: 'radius-btns-field',
  radioButtons: 'radio-btn',
  headerSearchButton: 'header-search-btn',
};

function Explore({ history }) {
  function redirectToExploreFood(type) {
    history.push(`/explorar/${type}`);
  }
  return (
    <div>
      <Header title="Explorar" isRender={ false } classes={ classObject } />
      <div className="explore-btns">
        <button
          type="button"
          data-testid="explore-food"
          onClick={ () => redirectToExploreFood('comidas') }
        >
          Explorar Comidas
        </button>
        <button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => redirectToExploreFood('bebidas') }
        >
          Explorar Bebidas
        </button>
      </div>
      <Footer />
    </div>
  );
}

Explore.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Explore;
