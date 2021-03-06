import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../css/footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <footer data-testid="footer" className="footer">
        <Link className="footer-link" to="/bebidas">
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
