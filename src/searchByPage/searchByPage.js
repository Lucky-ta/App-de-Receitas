import getApi from '../services/getApi';

const pagesRequest = {
  drinkResponse: async (ingredient, radioName, firstLetter, input) => {
    if (ingredient) {
      const drinkResponse = await getApi(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`);
      return drinkResponse;
    }
    if (radioName) {
      const drinkResponse = await getApi(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
      return drinkResponse;
    }
    if (firstLetter && input.length > 1) {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    const drinkResponse = await getApi(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`);
    return drinkResponse;
  },
  mealsResponse: async (ingredient, radioName, firstLetter, input) => {
    if (ingredient) {
      const mealsResponse = await getApi(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`);
      return mealsResponse;
    }
    if (radioName) {
      const mealsResponse = await getApi(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
      return mealsResponse;
    }
    if (firstLetter && input.length > 1) {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    const mealsResponse = await getApi(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`);
    return mealsResponse;
  },
};

export default pagesRequest;
