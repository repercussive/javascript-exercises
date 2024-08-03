function decodeNullCipher(encodedMessage) {
  let result = ''
  const characters = encodedMessage.split('')

  for (let i = 0; i < characters.length; i++) {
    if (i % 2 === 0) {
      result += characters[i]
    }
  }

  return result
}
