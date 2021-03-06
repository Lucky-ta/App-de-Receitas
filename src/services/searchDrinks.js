import getApi from './getApi';

const ALL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const NAME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const FIRST_LETTER = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
const INGREDIENT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const ALLINGREDIENTS = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const RANDOM = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const GET_CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
const ID = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export default async function drinkApiToSelect(type, _value) {
  switch (type) {
  case 'INGREDIENT':
    return getApi(`${INGREDIENT}${_value}`);
  case 'allIngredients':
    return getApi(`${ALLINGREDIENTS}`);
  case 'NAME':
    return getApi(`${NAME}${_value.split(' ').splice('_')}`);
  case 'FIRST_LETTER':
    return getApi(`${FIRST_LETTER}${_value}`);
  case 'RANDOM':
    return getApi(`${RANDOM}`);
  case 'ALL':
    return getApi(`${ALL}`);
  case 'GET_CATEGORIES':
    return getApi(`${GET_CATEGORIES}`);
  case 'CATEGORIES':
    return getApi(`${CATEGORIES}${_value}`);
  case 'ID':
    return getApi(`${ID}${_value}`);
  default:
    break;
  }
}
