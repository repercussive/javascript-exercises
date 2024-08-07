function multiplyRecipePortions(recipe, multiplicationFactor) {
  // create a deep copy of the original recipe, rather than modifying it directly
  const newRecipe = structuredClone(recipe)

  newRecipe.serves *= multiplicationFactor

  for (const ingredient of newRecipe.ingredients) {
    ingredient.quantity *= multiplicationFactor
  }

  return newRecipe
}