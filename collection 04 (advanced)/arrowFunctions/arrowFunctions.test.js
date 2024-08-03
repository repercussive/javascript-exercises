import functions from './arrowFunctions'

const { helloWorld, square, rectangleArea } = functions

describe('Arrow functions', () => {

  test.skip('helloWorld returns "Hello, world!"', () => {
    expect(helloWorld()).toEqual('Hello, world!')
  })

  test.skip('helloWorld is an arrow function', () => {
    expect(helloWorld.prototype).toBeUndefined()
  })

  test.skip('square function works', () => {
    expect(square(2)).toEqual(4)
    expect(square(5)).toEqual(25)
  })

  test.skip('square is an arrow function', () => {
    expect(square.prototype).toBeUndefined()
  })

  test.skip('rectangleArea function works', () => {
    expect(rectangleArea(2, 5)).toEqual(10)
    expect(rectangleArea(4, 12)).toEqual(48)
  })

  test.skip('rectangleArea is an arrow function', () => {
    expect(rectangleArea.prototype).toBeUndefined()
  })

})