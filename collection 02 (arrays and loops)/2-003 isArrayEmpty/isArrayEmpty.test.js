import isArrayEmpty from './isArrayEmpty'

describe('isArrayEmpty', () => {

  test.skip('Returns true for empty array', () => {
    let array = []
    expect(isArrayEmpty(array)).toBe(true)
  })

  test.skip('Returns false for array which contains one element', () => {
    let array = ['hello']
    expect(isArrayEmpty(array)).toBe(false)
  })

  test.skip('Returns false for array which contains many elements', () => {
    let array = [1, 2, 3, 4, 5]
    expect(isArrayEmpty(array)).toBe(false)
  })

})