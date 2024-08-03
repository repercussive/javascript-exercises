import getWordCount from './getWordCount'

describe('getWordCount', () => {

  test.skip('Returns correct word count', () => {
    let string = 'this is a string which contains eight words'
    expect(getWordCount(string)).toBe(8)
  })

  test.skip('Returns 0 for empty string', () => {
    let string = ''
    expect(getWordCount(string)).toBe(0)
  })

  test.skip('Works for single word', () => {
    let string = 'hello'
    expect(getWordCount(string)).toBe(1)
  })

  test.skip('Ignores leading and trailing whitespace', () => {
    let string = '    this has whitespace on either end   '
    expect(getWordCount(string)).toBe(6)
  })

})