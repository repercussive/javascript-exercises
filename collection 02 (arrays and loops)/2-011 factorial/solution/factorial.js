function factorial(number) {
  if (number < 0) return undefined
  if (number === 0 || number === 1) return 1

  let result = 1

  for (let i = number; i >= 1; i--) {
    result *= i
  }

  return result
}
