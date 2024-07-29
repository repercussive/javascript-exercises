import caffeineRemaining from './caffeineRemaining'

describe('caffeineRemaining', () => {

  test.skip('[1/2] Correctly calculates remaining value after elapsed time', () => {
    expect(caffeineRemaining(100, 6)).toBeCloseTo(50)
  })

  test.skip('[2/2] Correctly calculates remaining value after elapsed time', () => {
    expect(caffeineRemaining(200, 9)).toBeCloseTo(70.71)
  })

  test.skip('Calculates no change after 0 hours', () => {
    expect(caffeineRemaining(100, 0)).toEqual(100)
  })

})