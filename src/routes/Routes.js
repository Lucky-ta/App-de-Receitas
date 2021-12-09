import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../pages/Foods';
import Login from '../pages/Login';
import Drinks from '../pages/Drinks';
import DrinksRecipesInProgress from '../pages/DrinksRecipesInProgress';
import Explore from '../pages/Explore';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreDrinksByIngredients from '../pages/ExploreDrinksByIngredients';
import ExploreMeals from '../pages/ExploreMeals';
import ExploreMealsByArea from '../pages/ExploreMealsByArea';
import ExploreMealsByIngredients from '../pages/ExploreMealsByIngredients';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import Meals from '../pages/Meals';
import MealsRecipesInProgress from '../pages/MealsRecipesInProgress';
import Perfil from '../pages/Perfil';
import RecipeDrinkDetails from '../pages/RecipeDrinkDetails';
import RecipeMealDetails from '../pages/RecipeMealDetails';
import RecipesDone from '../pages/RecipesDone';

function Routes() {
  return (
    <Switch>
      <Route path="/comidas" component={ Header } />
      <Route exact path="/" component={ Login } />
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
      <Route exact path="/perfil" component={ Perfil } />
      <Route exact path="/receitas-feitas" component={ RecipesDone } />
      <Route exact path="/ /receitas-favoritas" component={ FavoriteRecipes } />
      <Route exact path="/comidas" component={ Meals } />
      <Route exact path="/bebidas" component={ Drinks } />
      <Route exact path="/comidas/{id-da-receita}" component={ RecipeMealDetails } />
      <Route exact path="/bebidas/{id-da-receita}" component={ RecipeDrinkDetails } />
      <Route
        exact
        path="/comidas/{id-da-receita}/in-progress"
        component={ MealsRecipesInProgress }
      />
      <Route
        exact
        path="/bebidas/{id-da-receita}/in-progress"
        component={ DrinksRecipesInProgress }
      />
    </Switch>
  );
}
export default Routes;
