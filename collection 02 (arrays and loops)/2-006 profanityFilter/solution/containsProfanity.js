const forbiddenWords = ['heck', 'stinky', 'fudge']

function containsProfanity(message) {
  const messageLowerCase = message.toLowerCase()

  for (const badWord of forbiddenWords) {
    if (messageLowerCase.includes(badWord)) {
      return true
    }
  }

  return false
}