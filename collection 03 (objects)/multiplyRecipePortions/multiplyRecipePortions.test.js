import multiplyRecipePortions from './multiplyRecipePortions'

describe('multiplyRecipePortions', () => {

  test.skip('Doubling a recipe works', () => {
    const recipe = {
      serves: 2,
      ingredients: [
        { name: 'tofu', unit: 'g', quantity: 200 },
        { name: 'rice noodles', unit: 'g', quantity: 150 },
        { name: 'soy sauce', unit: 'tbsp', quantity: 1 }
      ]
    }

    expect(multiplyRecipePortions(recipe, 2)).toEqual({
      serves: 4,
      ingredients: [
        { name: 'tofu', unit: 'g', quantity: 400 },
        { name: 'rice noodles', unit: 'g', quantity: 300 },
        { name: 'soy sauce', unit: 'tbsp', quantity: 2 }
      ]
    })
  })

  test.skip('Halving a recipe works', () => {
    const recipe = {
      serves: 2,
      ingredients: [
        { name: 'pasta', unit: 'g', quantity: 150 },
        { name: 'green pesto', unit: 'g', quantity: 100 },
        { name: 'parmesan', unit: 'g', quantity: 40 }
      ]
    }

    expect(multiplyRecipePortions(recipe, 0.5)).toEqual({
      serves: 1,
      ingredients: [
        { name: 'pasta', unit: 'g', quantity: 75 },
        { name: 'green pesto', unit: 'g', quantity: 50 },
        { name: 'parmesan', unit: 'g', quantity: 20 }
      ]
    })
  })

  test.skip('Does not modify the original object', () => {
    const originalObject = {
      serves: 2, 
      ingredients: [{ name: 'pasta', unit: 'g', quantity: 150 }]
    }

    multiplyRecipePortions(originalObject, 2)

    expect(originalObject).toEqual({
      serves: 2, 
      ingredients: [{ name: 'pasta', unit: 'g', quantity: 150 }]
    })
  })

})