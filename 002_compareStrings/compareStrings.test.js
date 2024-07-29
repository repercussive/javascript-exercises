import compareStrings from './compareStrings'

describe('compareStrings', () => {

  test.skip('Returns true for identical strings', () => {
    let string1 = 'Hello, world!'
    let string2 = 'Hello, world!'
    expect(compareStrings(string1, string2)).toBe(true)
  })

  test.skip('Returns false for strings that do not match', () => {
    let string1 = 'Hello, world!'
    let string2 = 'Greetings, world!'
    expect(compareStrings(string1, string2)).toBe(false)
  })

  test.skip('Returns true for strings that match, regardless of case', () => {
    let string1 = 'HELLO, world!'
    let string2 = 'hello, WORLD!'
    expect(compareStrings(string1, string2)).toBe(true)
  })

  test.skip('Returns true for strings that match, regardless of whitespace', () => {
    let string1 = '            Hello, world!  '
    let string2 = '    Hello, world!             '
    expect(compareStrings(string1, string2)).toBe(true)
  })

  test.skip('Returns true for strings that match, regardless of both case and whitespace', () => {
    let string1 = '            HELLO, world!  '
    let string2 = '    hello, WORLD!             '
    expect(compareStrings(string1, string2)).toBe(true)
  })

  test.skip('Returns true for equal strings that do not contain any letters', () => {
    let string1 = '123@%!'
    let string2 = '123@%!'
    expect(compareStrings(string1, string2)).toBe(true)
  })

})