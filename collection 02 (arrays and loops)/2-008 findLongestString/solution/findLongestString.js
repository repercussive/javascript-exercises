function findLongestString(stringArray) {
  if (stringArray.length === 0) {
    return undefined
  }

  let longestString = stringArray[0]

  for (const string of stringArray) {
    if (string.length > longestString.length) {
      longestString = string
    }
  }

  return longestString
}