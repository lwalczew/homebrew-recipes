import {sortRecipesByName, initialRecipes} from '../utils'

const recipes = (state = initialRecipes, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return sortRecipesByName([
        ...state,
        action.recipe
      ])

    case 'DELETE_RECIPE':
      return state.filter(recipe => recipe.id !== action.id)

    case 'EDIT_RECIPE':
      const otherRecipes = state.filter(recipe => recipe.id !== action.recipe.id);
      return sortRecipesByName([
        ...otherRecipes,
        action.recipe
      ])

    default:
      return state
  }
}

export default recipes;