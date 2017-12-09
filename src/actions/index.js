export const addRecipe = (recipe) => ({
  type: 'ADD_RECIPE',
  recipe
})

/*

export const updateRecipe = (id, name, style, malt, hops, yeast, other, directions => ({
  type: 'UPDATE_RECIPE',
  id,
  name,
  style,
  malt,
  hops,
  yeast,
  other,
  directions
}))
*/

export const deleteRecipe = (id) => ({
  type: 'DELETE_RECIPE',
  id
})