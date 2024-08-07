# `multiplyRecipePortions`

##  Scenario

You are creating a recipe website, and you want to add a feature that allows users to multiply the quantities of the ingredients listed in a recipe according to the number of servings they wish to make.

## Task

Write a function that, given:
- an object representing a recipe
- a scale factor

returns a **new recipe object** where the quantities of the ingredients have been multiplied by the scale factor. 

```js
multiplyRecipePortions(
  // recipe
  {
    serves: 2,
    ingredients: [
      { name: 'tofu', unit: 'g', quantity: 200 },
      { name: 'rice noodles', unit: 'g', quantity: 150 },
      { name: 'soy sauce', unit: 'tbsp', quantity: 1 }
    ]
  },

  // scale factor
  2
)  

// returns:
{
  serves: 4,
  ingredients: [
    { name: 'tofu', unit: 'g', quantity: 400 },
    { name: 'rice noodles', unit: 'g', quantity: 300 },
    { name: 'soy sauce', unit: 'tbsp', quantity: 2 }
  ]
}
```