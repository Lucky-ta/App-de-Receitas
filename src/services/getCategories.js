export async function getMealsCategories() {
  const mealsURL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

  const mealsResponse = await fetch(mealsURL);

  const mealsJSON = await mealsResponse.json();

  return mealsJSON;
}

export async function getDrinksCategories() {
  const drinksURL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  const drinksResponse = await fetch(drinksURL);
  const drinksJSON = await drinksResponse.json();

  return drinksJSON;
}
