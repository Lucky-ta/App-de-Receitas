function getIngredients(random) {
  const { strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
    strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10,
    strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15,
    strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20,
  } = random;

  const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4,
    strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9,
    strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14,
    strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19,
    strIngredient20];

  return ingredients.filter((ingredient) => ingredient !== '');
}

export default getIngredients;
