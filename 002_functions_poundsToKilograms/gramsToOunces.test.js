import gramsToOunces from './gramsToOunces'

describe('gramsToOunces', () => {

  test.skip('Conversion works', () => {
    expect(gramsToOunces(28.3495)).toBeCloseTo(1.0)
  })

  test.skip('Rounds to 1 decimal place', () => {
    expect(gramsToOunces(100)).toBeCloseTo(3.5)
  })

})