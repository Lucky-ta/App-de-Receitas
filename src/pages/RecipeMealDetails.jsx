import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import Buttons from '../recipeDetailsComponents/Buttons';
import ImageAndTitle from '../recipeDetailsComponents/ImageAndTitle';
import Ingredients from '../recipeDetailsComponents/Ingredients';
import getApi from '../services/getApi';
import '../index.css';

function RecipeMealDetails({ match }) {
  const [filter, setFilter] = useState([]);
  const {
    // store,
    // setStore,
    doneRecipes,
    setDoneRecipes,
    inProgress,
    setInProgress,
    drinks } = useContext(MyContext);

  const { id } = match.params;

  const six = 6;
  const eleven = 11;
  const twenty = 20;

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getApi(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      setFilter(response);
    };
    fetchApi();
  }, [id, doneRecipes]);

  if (filter.length === 0) {
    return null;
  }
  const { meals: meal } = filter;

  const {
    strMealThumb,
    strMeal,
    strCategory,
    strInstructions,
    idMeal,
    strArea,
    dateModified,
    strTags,
    strYoutube } = meal[0];

  function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const matcher = url.match(regExp);

    return (matcher && matcher[2].length === eleven)
      ? matcher[2]
      : null;
  }

  const recipes = {
    id: idMeal,
    type: 'comida',
    area: strArea,
    category: strCategory,
    alcoholicOrNot: '',
    name: strMeal,
    image: strMealThumb,
    doneDate: dateModified,
    tags: [strTags],
  };

  const ingredientIndex = Object.keys(meal[0]).indexOf('strIngredient1');
  const values = Object.values(meal[0]).splice(ingredientIndex);
  const newArray = values.slice(0, twenty);

  const measureIndex = Object.keys(meal[0]).indexOf('strMeasure1');
  const measureValues = Object.values(meal[0]).slice(measureIndex);
  const measureArray = measureValues.slice(0, twenty);

  function beginRecipe() {
    setDoneRecipes([...doneRecipes, recipes]);
    const test = ([...doneRecipes, recipes]);
    const { meals: foods } = inProgress;
    const mealsInProgress = {
      ...inProgress,
      meals: {
        ...foods,
        [idMeal]: [],
      },
    };
    setInProgress(mealsInProgress);
    localStorage.setItem('inProgressRecipes', JSON.stringify(mealsInProgress));
    localStorage.setItem('doneRecipes', JSON.stringify(test));
  }

  function onGoingRecipe() {
    const { meals: foods } = inProgress;
    const mealsInProgress = {
      ...inProgress,
      meals: {
        ...foods,
        [idMeal]: [],
      },
    };
    setInProgress(mealsInProgress);
    localStorage.setItem('inProgressRecipes', JSON.stringify(mealsInProgress));
  }

  const concatArrays = newArray
    .map((sla, index) => sla !== null && sla.length !== 0 && sla
      .concat(' - ', measureArray[index]));

  const slicedDrinks = drinks.slice(0, six);

  const { meals: foods } = inProgress;
  console.log(foods);

  return (
    <div>
      <ImageAndTitle img={ strMealThumb } title={ strMeal } />
      <Buttons shareIcon={ shareIcon } WHIcon={ whiteHeartIcon } />
      <h3 data-testid="recipe-category">{ strCategory }</h3>
      <Ingredients ingredients={ concatArrays } />
      <h4 data-testid="instructions">{ strInstructions }</h4>
      <div data-testid="video">
        { strYoutube !== null
          && (
            <div>
              <h1> Youtube Embed </h1>
              <YouTube
                videoId={ getId(`${strYoutube}`) }
              />
            </div>
          )}
      </div>
      <div>
        { slicedDrinks.map((index, i) => (
          <div
            data-testid={ `${i}-recomendation-card` }
            key={ i }
          >
            <h1
              data-testid={ `${i}-recomendation-title` }
            >
              { index.strDrink }
            </h1>
          </div>
        ))}
      </div>
      { !Object.keys(foods).some((obj) => obj === idMeal)
        ? (
          <Link to={ `/comidas/${id}/in-progress` }>
            <button
              className="start-recipe-btn"
              type="button"
              onClick={ beginRecipe }
              data-testid="start-recipe-btn"
            >
              Iniciar Receita
            </button>
          </Link>

        )
        : (
          <Link to={ `/comidas/${id}/in-progress` }>
            <button
              type="button"
              className="start-recipe-btn"
              data-testid="start-recipe-btn"
              onClick={ onGoingRecipe }
            >
              Continuar Receita
            </button>
          </Link>
        )}
    </div>
  );
}

RecipeMealDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default RecipeMealDetails;
