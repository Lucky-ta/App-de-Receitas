import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { MAX_CARDS } from '../global/constants';

function DrinkCards() {
  const { drinks } = useContext(MyContext);
  const history = useHistory();

  function showCards() {
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

  function goToDrink() {
    if (drinks === null) {
      return global.alert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
    }

    if (drinks.length === 1) {
      const { idDrink: id } = drinks[0];
      return history.push(`/bebidas/${id}`);
    }
    return showCards();
  }

  return (
    <div>
      { goToDrink() }
    </div>
  );
}

export default DrinkCards;
