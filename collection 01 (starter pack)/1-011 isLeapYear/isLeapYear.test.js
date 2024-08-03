import isLeapYear from './isLeapYear'

describe('isLeapYear', () => {

  test.skip('Works with non-century years', () => {
    expect(isLeapYear(1996)).toBe(true)
  })
  
  test.skip('Works with non-century years', () => {
    expect(isLeapYear(1997)).toBe(false)
  })

  test.skip('Works with non-century years in the (very) far future', () => {
    expect(isLeapYear(34996)).toBe(true)
  })

  test.skip('Works with century years', () => {
    expect(isLeapYear(1900)).toBe(false)
  })

  test.skip('Works with century years', () => {
    expect(isLeapYear(1600)).toBe(true)
  })

  test.skip('Works with century years', () => {
    expect(isLeapYear(700)).toBe(false)
  })

})