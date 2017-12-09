export const sortRecipesByName = (recipesStateArray) => {
  return recipesStateArray.sort(function(a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}

export const initialRecipes = [
  {
    id: '1', 
    name: 'Citra IPA', 
    style: 'India Pale Ale (IPA)',
    malt: [
      {
        name: 'Golden Light LME',
        amount: '2 cans'
      },
      {
        name: 'Belgian Biscuit',
        amount: '8 oz.'
      },
      {
        name: 'Crystal 20',
        amount: '1 lb.'
      }
    ],
    hops: [
      {
        name: 'Citra',
        amount: '12 AAU',
        time: '60m'
      },
      {
        name: 'Citra',
        amount: '0.5 oz.',
        time: '15m'
      },
      {
        name: 'Citra',
        amount: '1 oz.',
        time: '0m'
      },
      {
        name: 'Citra',
        amount: '1 oz.',
        time: 'Dry Hop'
      }
    ],
    yeast: 'Safale US-05',
    otherIngredients: [
      {
        name: 'Irish Moss',
        amount: '1 tsp.',
        time: '15m'
      }
    ],
    directions: 'Standard brewing instructions.'
  },
  {
    id: '2', 
    name: 'Dubbel Trouble', 
    style: 'Belgian Dubbel',
    malt: [
      {
        name: 'Amber LME',
        amount: '2 cans'
      },
      {
        name: 'Cara Red',
        amount: '8 oz.'
      },
      {
        name: 'Crystal 60',
        amount: '8 oz.'
      }
    ],
    hops: [
      {
        name: 'Perle',
        amount: '4 AAU',
        time: '60m'
      }
    ],
    yeast: 'Wyeast 1214',
    otherIngredients: [
      {
        name: '',
        amount: '',
        time: ''
      }
    ],
    directions: 'Standard brewing instructions.'
  }
]