import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import drinkApiToSelect from '../services/searchDrinks';

function ExploreDrinks({ history }) {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    (async () => {
      const { drinks } = await drinkApiToSelect('RANDOM');
      setRandom(drinks[0].idDrink);
    })();
  }, []);

  console.log(random);

  function redirectToExplore(type, explore) {
    if (explore) {
      history.push(`/explorar/bebidas/${type}`);
    } else {
      history.push(`/bebidas/${type}`);
    }
  }
  return (
    <div>
      <Header title="Explorar Bebidas" isRender={ false } />
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
      <Footer />
    </div>
  );
}

ExploreDrinks.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ExploreDrinks;
