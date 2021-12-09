import getApi from './getApi';

const ALL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const NAME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const FIRST_LETTER = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
const INGREDIENT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const RANDOM = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

export default async function drinkApiToSelect(value) {
  switch (value) {
  case 'INGREDIENT':
    return getApi(`${INGREDIENT}${value}`);
  case 'NAME':
    return getApi(`${NAME}${value.split(' ').splice('_')}`);
  case 'FIRST_LETTER':
    return getApi(`${FIRST_LETTER}${value}`);
  case 'RANDOM':
    return getApi(`${RANDOM}`);
  case 'ALL':
    return getApi(`${ALL}`);
  default:
    break;
  }
}
