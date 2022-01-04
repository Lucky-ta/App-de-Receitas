import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreMeals({ history }) {
  function redirectToExplore(type) {
    history.push(`/explorar/comidas/${type}`);
  }

  return (
    <div>
      <Header title="Explorar Comidas" isRender={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => redirectToExplore('ingredientes') }
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-by-area"
        onClick={ () => redirectToExplore('area') }
      >
        Por Local de Origem
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

ExploreMeals.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ExploreMeals;
//
