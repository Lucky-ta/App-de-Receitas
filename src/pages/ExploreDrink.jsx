import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDrinks({ history }) {
  function redirectToExplore(type) {
    history.push(`/explorar/bebidas/${type}`);
  }
  return (
    <div>
      <Header title="Explorar Bebidas" isRender={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => redirectToExplore('ingredientes') }
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => redirectToExplore('random') }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}

ExploreDrinks.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ExploreDrinks;
