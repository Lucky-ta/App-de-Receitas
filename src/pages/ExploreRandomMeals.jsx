// import React, { useState, useEffect } from 'react';
// import foodApiToSelect from '../services/searchMeals';
// import getIngredients from '../services/getIngredients';

// function ExploreRandomMeals() {
//   const [random, setRandom] = useState([]);

//   useEffect(() => {
//     (async () => {
//       const { meals } = await foodApiToSelect('random');
//       setRandom(meals);
//     })();
//   }, []);

//   // console.log(random);

//   return (
//     <div>
//       {random.map((randomFood) => (
//         <div key={ randomFood.idMeal }>
//           <h2>{randomFood.strMeal}</h2>
//           <img src={ randomFood.strMealThumb } alt={ randomFood.strMeal } />
//           <h3>Ingredientes:</h3>
//           {getIngredients(randomFood).map((ingredient) => (
//             <p key={ ingredient }>{ingredient}</p>
//           ))}
//           <h3>Modo de Fazer:</h3>
//           <p>{randomFood.strInstructions}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ExploreRandomMeals;
