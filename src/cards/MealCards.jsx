import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { MAX_CARDS, MAX_OBJECT_KEYS } from '../global/constants';

function MealCards() {
  const { meals, results, toogle } = useContext(MyContext);

  const history = useHistory();

  function showCards() {
    const cards = toogle
      ? meals.filter((card, index) => index <= MAX_CARDS)
      : results.filter((card, index) => index <= MAX_CARDS);
    return (
      cards.map(({ idMeal, strMealThumb, strMeal }, index) => (
        <Link to={ `/comidas/${idMeal}` } key={ idMeal }>
          <div data-testid={ `${index}-recipe-card` }>
            <img
              data-testid={ `${index}-card-img` }
              style={ { height: '5em' } }
              src={ strMealThumb }
              alt={ strMeal }
            />
            <p data-testid={ `${index}-card-name` }>{ strMeal }</p>
          </div>
        </Link>
      ))
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
    <div>
      { goToFood() }
    </div>
  );
}

export default MealCards;
