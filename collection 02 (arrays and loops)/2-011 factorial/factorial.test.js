import factorial from './factorial'

describe('factorial', () => {

  test.skip('0! = 1', () => {
    expect(factorial(0)).toBe(1)
  })

  test.skip('1! = 1', () => {
    expect(factorial(1)).toBe(1)
  })

  test.skip('5! = 120', () => {
    expect(factorial(5)).toBe(120)
  })

  test.skip('Returns undefined for negative numbers', () => {
    expect(factorial(-5)).toBeUndefined()
  })

  test.skip.each([
    [2, 2],
    [3, 6],
    [8, 40320],
    [10, 3628800],
    [12, 479001600],
  ])('Sample tests: %p! = %p', (number, answer) => {
    expect(factorial(number)).toEqual(answer)
  })

})