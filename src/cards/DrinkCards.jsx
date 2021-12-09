import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MAX_CARDS } from '../global/global';
import MyContext from '../context/MyContext';

function DrinkCards() {
  const { drinks } = useContext(MyContext);
  const cards = drinks.filter((card, index) => index <= MAX_CARDS);

  return (
    cards.map(({ idDrink, strDrinkThumb, strDrink }, index) => (
      <Link to={ `/bebidas/${idDrink}` } key={ idDrink }>
        <div data-testid={ `${index}-recipe-card` }>
          <img
            data-testid={ `${index}-card-img` }
            style={ { height: '5em' } }
            src={ strDrinkThumb }
            alt={ strDrink }
          />
          <p data-testid={ `${index}-card-name` }>{ strDrink }</p>
        </div>
      </Link>
    ))
  );
}

export default DrinkCards;
