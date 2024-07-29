import calculateRemainingAnnualLeave from './calculateRemainingAnnualLeave'

describe('calculateRemainingAnnualLeave', () => {

  test.skip('Returns correct value for remaining days of annual leave', () => {
    let totalDaysAvailable = 25
    let holidays = [5, 3, 2, 2, 8]
    let result = calculateRemainingAnnualLeave(totalDaysAvailable, holidays)
    expect(result).toEqual(5)
  })

  test.skip('It works if one holiday has been taken', () => {
    let totalDaysAvailable = 25
    let holidays = [3]
    let result = calculateRemainingAnnualLeave(totalDaysAvailable, holidays)
    expect(result).toEqual(22)
  })

  test.skip('It works if no holidays have been taken', () => {
    let totalDaysAvailable = 25
    let holidays = []
    let result = calculateRemainingAnnualLeave(totalDaysAvailable, holidays)
    expect(result).toEqual(25)
  })

})