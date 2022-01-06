import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import foodApiToSelect from '../services/searchMeals';
import { TWELVE } from '../global/constants';

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
    );
  }

  function renderCards() {
    return (
      <div>
        {mealsByArea.map(({ strMeal, strMealThumb, idMeal }, index) => (
          <div
            role="button"
            tabIndex={ index }
            onClick={ () => history.push(`/comidas/${idMeal}`) }
            onKeyPress={ () => history.push(`/comidas/${idMeal}`) }
            key={ `${strMeal}-${index}` }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              width="150px"
              data-testid={ `${index}-card-img` }
              src={ strMealThumb }
              alt={ strMeal }
            />
            <h3 data-testid={ `${index}-card-name` }>{strMeal}</h3>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <Header title="Explorar Origem" isRender />
      {renderSelect()}
      {renderCards()}
      <Footer />
    </div>
  );
}

export default ExploreMealsByArea;
