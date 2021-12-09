import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <div>
      <footer data-testid="footer">
        <Link to="/bebidas">
          <input
            type="image"
            data-testid="drinks-bottom-btn"
            src={ drinkIcon }
            alt="drinkIcon"
          />
        </Link>

        <Link to="/explorar">
          <input
            type="image"
            data-testid="explore-bottom-btn"
            src={ exploreIcon }
            alt="exploreIcon"
          />
        </Link>

        <Link to="/comidas">
          <input
            type="image"
            data-testid="food-bottom-btn"
            src={ mealIcon }
            alt="mealIcon"
          />
        </Link>
      </footer>
    </div>
  );
}
export default Footer;
