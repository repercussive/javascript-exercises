import sumRange from './sumRange'

describe('sumRange', () => {

  test.skip('Sums numbers within the range', () => {
    expect(sumRange(1, 5)).toBe(15)
  })

  test.skip('Works with large numbers', () => {
    expect(sumRange(500, 8000)).toBe(31879250)
  })

  test.skip('Works when minimum is equal to maximum', () => {
    expect(sumRange(123, 123)).toBe(123)
  })

  test.skip.each([
    [2, 10, 54],
    [50, 100, 3825],
    [250, 255, 1515],
    [0, 1, 1],
    [0, 2, 3]
  ])('Sample tests: sum between %p and %p should equal %p', (min, max, result) => {
    expect(sumRange(min, max)).toBe(result)
  })
  
})