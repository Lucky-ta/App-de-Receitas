import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import foodApiToSelect from '../services/searchMeals';

function ExploreMeals({ history }) {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    (async () => {
      const { meals } = await foodApiToSelect('random');
      setRandom(meals[0].idMeal);
    })();
  }, []);

  // console.log(random);

  function redirectToExplore(type, explore) {
    if (explore) {
      history.push(`/explorar/comidas/${type}`);
    } else {
      history.push(`/comidas/${type}`);
    }
  }

  return (
    <div>
      <Header title="Explorar Comidas" isRender={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => redirectToExplore('ingredientes', true) }
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-by-area"
        onClick={ () => redirectToExplore('area', true) }
      >
        Por Local de Origem
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

ExploreMeals.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ExploreMeals;
//
