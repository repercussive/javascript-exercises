function gramsToOunces(grams) {
  const convertedValue = grams / 28.3495

  // Round to 1 decimal place
  const roundedValue = Math.round(convertedValue * 10) / 10
  return roundedValue
}