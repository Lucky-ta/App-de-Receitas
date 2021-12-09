import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipesDone from '../pages/RecipesDone';
import RecipeDrinkDetails from '../pages/RecipeDrinkDetails';
import DrinksRecipesInProgress from '../pages/DrinksRecipesInProgress';
import Drinks from '../pages/Drinks';
import Explore from '../pages/Explore';
import ExploreDrinks from '../pages/ExploreDrink';
import ExploreDrinksByIngredients from '../pages/ExploreDrinksByIngredients';
import ExploreMeals from '../pages/ExploreMeals';
import ExploreMealsByArea from '../pages/ExploreMealsByArea';
import ExploreMealsByIngredients from '../pages/ExploreMealsByIngredients';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import RecipeMealDetails from '../pages/RecipeMealDetails';
import MealsRecipesInProgress from '../pages/MealsRecipesInProgress';
import Meals from '../pages/Meals';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

function Routes() {
  return (
    <Switch>
      <Route exact path="/comidas" component={ Meals } />
      <Route exact path="/bebidas" component={ Drinks } />
      <Route exact path="/comidas/:id" component={ RecipeMealDetails } />
      <Route exact path="/bebidas/:id" component={ RecipeDrinkDetails } />
      <Route exact path="/comidas/:id/in-progress" component={ MealsRecipesInProgress } />
      <Route
        exact
        path="/bebidas/:id/in-progress"
        component={ DrinksRecipesInProgress }
      />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/explorar/comidas" component={ ExploreMeals } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ ExploreMealsByIngredients }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ ExploreDrinksByIngredients }
      />
      <Route exact path="/explorar/comidas/area" component={ ExploreMealsByArea } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/receitas-feitas" component={ RecipesDone } />
      <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}
export default Routes;
