import {connect} from 'react-redux';
import RecipeList from './RecipeList';
import {deleteRecipe} from '../actions';

const getVisibleRecipes = (recipes, visibilityFilter) => {
  return recipes.filter(recipe => visibilityFilter.name.length > 0 ? recipe.name.toUpperCase().includes(visibilityFilter.name.toUpperCase()) : true)
    .filter(recipe => visibilityFilter.style.length > 0 ? recipe.style.toUpperCase().includes(visibilityFilter.style.toUpperCase()) : true)
    .filter(recipe => visibilityFilter.malt.length > 0 ? recipe.malt.reduce((a, b) => a + b.name + '...', '').toUpperCase().includes(visibilityFilter.malt.toUpperCase()) : true)
    .filter(recipe => visibilityFilter.hops.length > 0 ? recipe.hops.reduce((a, b) => a + b.name + '...', '').toUpperCase().includes(visibilityFilter.hops.toUpperCase()) : true)
    .filter(recipe => visibilityFilter.yeast.length > 0 ? recipe.yeast.toUpperCase().includes(visibilityFilter.yeast.toUpperCase()) : true)
    .filter(recipe => visibilityFilter.otherIngredients.length > 0 ? recipe.otherIngredients.reduce((a, b) => a + b.name + '...', '').toUpperCase().includes(visibilityFilter.otherIngredients.toUpperCase()) : true)
}

const mapStateToProps = (state) => ({
  visibleRecipes: getVisibleRecipes(state.recipes, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteClick: id => {
    dispatch(deleteRecipe(id))
  },
})

const RecipeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);

export default RecipeListContainer;