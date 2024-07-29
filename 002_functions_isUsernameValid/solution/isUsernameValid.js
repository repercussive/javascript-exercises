function isUsernameValid() {
  if (username === null || username === undefined) {
    return false
  }
  
  return username.length >= 5 && username.length <= 16
}