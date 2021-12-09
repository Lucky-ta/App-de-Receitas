import getApi from './getApi';

const NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const FIRST_LETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const INGREDIENT = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const BYAREA = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const AREA = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
const RANDOM = 'https://www.themealdb.com/api/json/v1/1/random.php';
const ALL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export default async function foodApiToSelect(value) {
  switch (value) {
  case 'INGREDIENT':
    return getApi(`${INGREDIENT}${value}`);
  case 'NAME':
    return getApi(`${NAME}${value.split(' ').splice('_')}`);
  case 'FIRST_LETTER':
    return getApi(`${FIRST_LETTER}${value}`);
  case 'random':
    return getApi(`${RANDOM}`);
  case 'area':
    return getApi(`${AREA}${value}`);
  case 'BYAREA':
    return getApi(`${BYAREA}`);
  case 'ALL':
    return getApi(`${ALL}`);
  default:
    break;
  }
}
