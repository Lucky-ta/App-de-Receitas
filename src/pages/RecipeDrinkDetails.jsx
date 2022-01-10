import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import YouTube from 'react-youtube';
import MyContext from '../context/MyContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import Buttons from '../recipeDetailsComponents/Buttons';
import ImageAndTitle from '../recipeDetailsComponents/ImageAndTitle';
import Ingredients from '../recipeDetailsComponents/Ingredients';
import getApi from '../services/getApi';

function RecipeDrinkDetails({ match }) {
  const [filter, setFilter] = useState([]);
  const { stor, setStor, drinks } = useContext(MyContext);

  const { id } = match.params;

  const six = 6;
  const eleven = 11;
  const fifteen = 15;

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getApi(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      setFilter(response);
    };
    fetchApi();
  }, [id, stor]);

  if (filter.length === 0) {
    return null;
  }
  const { drinks: drink } = filter;

  const {
    strDrinkThumb,
    strDrink,
    strCategory,
    strInstructions,
    idDrink, strArea,
    dateModified,
    strTags,
    strYoutube,
    strAlcoholic } = drink[0];

  function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const matcher = url.match(regExp);

    return (matcher && matcher[2].length === eleven)
      ? matcher[2]
      : null;
  }

  const doneRecipes = {
    id: idDrink,
    type: 'comida',
    area: strArea,
    category: strCategory,
    alcoholicOrNot: '',
    name: strDrink,
    image: strDrinkThumb,
    doneDate: dateModified,
    tags: [strTags],
  };

  const ingredientIndex = Object.keys(drink[0]).indexOf('strIngredient1');
  const values = Object.values(drink[0]).splice(ingredientIndex);
  const newArray = values.slice(0, fifteen);

  const measureIndex = Object.keys(drink[0]).indexOf('strMeasure1');
  const measureValues = Object.values(drink[0]).slice(measureIndex);
  const measureArray = measureValues.slice(0, fifteen);

  function click() {
    setStor([...stor, doneRecipes]);
    const test = ([...stor, doneRecipes]);
    localStorage.setItem('doneRecipes', JSON.stringify(test));
    console.log(stor);
  }

  const concatArrays = newArray
    .map((sla, index) => sla !== null && sla.length !== 0 && sla
      .concat(' - ', measureArray[index]));

  const slicedMeals = drinks.slice(0, six);

  return (
    <div>
      <ImageAndTitle img={ strDrinkThumb } title={ strDrink } />
      <h2 data-testid="recipe-category">
        { strAlcoholic }
      </h2>
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
        { slicedMeals.map((index, i) => (
          <div
            data-testid={ `${i}-recomendation-card` }
            key={ i }
          >
            <h1
              data-testid={ `${i}-recomendation-title` }
            >
              { index.strMeal }
            </h1>
          </div>
        ))}
      </div>
      {!stor.some((obj) => obj.id === idDrink) && (
        <button
          className="start-recipe-btn"
          type="button"
          onClick={ click }
          data-testid="start-recipe-btn"
        >
          Iniciar Receita
        </button>
      )}
    </div>
  );
}

RecipeDrinkDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default RecipeDrinkDetails;
