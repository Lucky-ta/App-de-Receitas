import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/explore.css';

function Explore({ history }) {
  function redirectToExploreFood(type) {
    history.push(`/explorar/${type}`);
  }
  return (
    <div>
      <Header title="Explorar" isRender={ false } />
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
