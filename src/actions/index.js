export const addRecipe = (recipe) => ({
  type: 'ADD_RECIPE',
  recipe
})

export const editRecipe = (recipe) => ({
  type: 'EDIT_RECIPE',
  recipe
})


export const deleteRecipe = (id) => ({
  type: 'DELETE_RECIPE',
  id
})