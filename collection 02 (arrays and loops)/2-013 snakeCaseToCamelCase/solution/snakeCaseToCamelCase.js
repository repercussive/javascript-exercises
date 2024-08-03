function snakeCaseToCamelCase(snakeCaseString) {
  let result = ''
  const characters = snakeCaseString.split('')

  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === '_') {
      continue
    }

    if (characters[i - 1] === '_') {
      result += characters[i].toUpperCase()
      continue
    }

    result += characters[i].toLowerCase()
  }

  return result
}