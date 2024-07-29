import getFirstArrayElement from './getFirstArrayElement'

describe('getFirstArrayElement', () => {

  test.skip('Returns first element of array', () => {
    let array = [1, 2, 3, 4, 5]
    expect(getFirstArrayElement(array)).toEqual(1)
  })

  test.skip('Works on arrays with 1 element', () => {
    let array = ['hello']
    expect(getFirstArrayElement(array)).toEqual('hello')
  })

  test.skip('Returns undefined if array is empty', () => {
    let array = []
    expect(getFirstArrayElement(array)).toBeUndefined()
  })

})