import isUsernameValid from './isUsernameValid'

describe('isUsernameValid', () => {

  test.skip('Returns true for valid username', () => {
    expect(isUsernameValid('bob99')).toBe(true)
  })

  test.skip('Returns false if username is too short', () => {
    expect(isUsernameValid('tiny')).toBe(false)
  })

  test.skip('Returns false if username is too long', () => {
    expect(isUsernameValid('thisNameIsTooLong')).toBe(false)
  })

  test.skip('Returns false for non-string values (null)', () => {
    expect(isUsernameValid(null)).toBe(false)
  })

  test.skip('Returns false for non-string values (undefined)', () => {
    expect(isUsernameValid(undefined)).toBe(false)
  })

})