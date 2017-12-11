const visibilityFilter = (state = {
  name: '',
  style: '',
  malt: '',
  hops: '',
  yeast: '',
  otherIngredients: ''
}, action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
    return {...state, [action.filter.name]: action.filter.value};

    default:
      return state

  }
}

export default visibilityFilter;