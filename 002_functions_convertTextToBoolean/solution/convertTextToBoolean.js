function convertTextToBoolean(text) {
  const textLowercase = text.toLowerCase()

  if (textLowercase === 'yes' || textLowercase === 'y') {
    return true
  } else if (textLowercase === 'no' || textLowercase === 'n') {
    return false
  }

  return undefined
}