import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MAX_CARDS } from '../global/global';
import MyContext from '../context/MyContext';

function MealCards() {
  const { meals } = useContext(MyContext);
  const cards = meals.filter((card, index) => index <= MAX_CARDS);

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

export default MealCards;
