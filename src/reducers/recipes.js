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

    case 'UPDATE_RECIPE':
      const otherRecipes = state.filter(recipe => recipe.id !== action.id);
      return sortRecipesByName([
        ...otherRecipes,
        {
          id: action.id,
          name: action.name,
          style: action.style,
          malt: action.malt,
          hops: action.hops,
          yeast: action.yeast,
          otherIngredients: action.other,
          directions: action.directions
        }
      ])

    default:
      return state
  }
}

export default recipes;