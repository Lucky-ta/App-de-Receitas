import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';
import { MAX_OBJECT_KEYS } from '../global/constants';
import '../css/cards.css';

function MealCards({ data }) {
  const { meals } = useContext(MyContext);
  const history = useHistory();
  const { isRecommendation, size } = data;
  console.log(isRecommendation);

  function showCards() {
    const cards = meals.filter((card, index) => index <= size);
    return (
      <div className="cards-container">
        { cards.map(({ idMeal, strMealThumb, strMeal }, index) => (
          <Link to={ `/comidas/${idMeal}` } key={ idMeal }>
            { isRecommendation
              ? (
                <div
                  data-testid={ `${index}-recomendation-card` }
                  className="cards"
                >
                  <img
                    data-testid={ `${index}-card-img` }
                    style={ { height: '5em' } }
                    src={ strMealThumb }
                    alt={ strMeal }
                  />
                  <p
                    data-testid={ `${index}-recomendation-title` }
                    // className="centering"
                  >
                    { strMeal }
                  </p>
                </div>
              )
              : (
                <div className="card-container" data-testid={ `${index}-recipe-card` }>
                  <img
                    className="cards"
                    data-testid={ `${index}-card-img` }
                    // style={ { height: '5em' } }
                    src={ strMealThumb }
                    alt={ strMeal }
                  />
                  <div className="card-title">
                    <p
                      className="card-text"
                      data-testid={ `${index}-card-name` }
                    >
                      { strMeal }
                    </p>
                  </div>
                </div>
              )}
          </Link>
        ))}
      </div>
    );
  }

  function goToFood() {
    if (meals === null) {
      return global.alert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
    }

    if (meals.length === 1 && Object.keys(meals[0]).length !== MAX_OBJECT_KEYS) {
      const { idMeal: id } = meals[0];
      return history.push(`/comidas/${id}`);
    }
    return showCards();
  }

  return (
    goToFood()
  );
}

MealCards.propTypes = ({
  size: PropTypes.number,
}).isRequired;

export default MealCards;
