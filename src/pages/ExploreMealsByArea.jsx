import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import foodApiToSelect from '../services/searchMeals';
import { TWELVE } from '../global/constants';
import '../css/cards.css';

const classObject = {
  headerProfilerContainer: 'header header-profile-container',
  profileIcon: 'profile-icon',
  headerTitleContainer: 'explore-by-area-title-container',
  headerTitle: 'explore-by-area-title header-title-profile',
  searchIcon: 'search-icon',
  searchContainer: 'search-field',
  headerSearchInṕutContainer: 'header-search-input-container',
  headerSearchInput: 'header-search-input form-label',
  radioBtnsContainer: 'radius-btns-field',
  radioButtons: 'radio-btn',
  headerSearchButton: 'header-search-btn',
};

function ExploreMealsByArea() {
  const [areas, setAreas] = useState([]);
  const [mealsByArea, setMealsByArea] = useState([]);
  const [optionArea, setOptionArea] = useState('All');
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const { meals } = await foodApiToSelect('BYAREA');
      setAreas(['All', ...meals]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (optionArea === 'All') {
        const { meals } = await foodApiToSelect('ALL');
        if (meals) {
          const firstMealsByArea = meals.slice(0, TWELVE);
          setMealsByArea(firstMealsByArea);
        }
      } else {
        const { meals } = await foodApiToSelect('area', optionArea);
        if (meals) {
          const firstMealsByArea = meals.slice(0, TWELVE);
          setMealsByArea(firstMealsByArea);
        }
      }
    })();
  }, [optionArea]);

  function renderSelect() {
    return (
      <div className="select-container">
        <select
          data-testid="explore-by-area-dropdown"
          value={ optionArea }
          onChange={ ({ target }) => setOptionArea(target.value) }
        >
          {areas.map((area) => {
            console.log(area);
            if (typeof area === 'string') {
              return (
                <option
                  key={ `${area}-key` }
                  data-testid={ `${area}-option` }
                  value={ area }
                >
                  {area}
                </option>

              );
            }
            return (
              <option
                key={ `${area.strArea}-key` }
                data-testid={ `${area.strArea}-option` }
                value={ area.strArea }
              >
                {area.strArea}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

  function renderCards() {
    return (
      <div className="cards-container">
        {mealsByArea.map(({ strMeal, strMealThumb, idMeal }, index) => (
          <div
            className="card-container"
            role="button"
            tabIndex={ index }
            onClick={ () => history.push(`/comidas/${idMeal}`) }
            onKeyPress={ () => history.push(`/comidas/${idMeal}`) }
            key={ `${strMeal}-${index}` }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              className="cards"
              width="150px"
              data-testid={ `${index}-card-img` }
              src={ strMealThumb }
              alt={ strMeal }
            />
            <div className="card-title">
              <h3
                className="card-text"
                data-testid={ `${index}-card-name` }
              >
                {strMeal}
              </h3>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <Header title="Explorar Origem" isRender classes={ classObject } />
      {renderSelect()}
      {renderCards()}
      <Footer />
    </div>
  );
}

export default ExploreMealsByArea;
