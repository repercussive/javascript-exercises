import findLongestString from './findLongestString'

describe('findLongestString', () => {

  test.skip('Returns the longest string in an array of strings', () => {
    let array = [
      'short string',
      'this string is the longest of them all',
      'this one is not quite as long'
    ]
    expect(findLongestString(array)).toEqual('this string is the longest of them all')
  })

  test.skip('Works for an array with a single string', () => {
    let array = ['the only string']
    expect(findLongestString(array)).toEqual('the only string')
  })

  test.skip('Works for an array with a single, empty string', () => {
    let array = ['']
    expect(findLongestString(array)).toEqual('')
  })

  test.skip('Returns undefined for an empty array', () => {
    let array = []
    expect(findLongestString(array)).toBeUndefined()
  })

  test.skip('If multiple strings have the same length, returns the first of the equal-length strings', () => {
    let array = [
      'abc',
      'one of three',
      'just as long',
      'equally long',
    ]
    expect(findLongestString(array)).toEqual('one of three')
  })

})