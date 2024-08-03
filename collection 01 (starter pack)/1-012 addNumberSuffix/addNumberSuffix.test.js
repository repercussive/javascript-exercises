import addNumberSuffix from './addNumberSuffix'

describe('addNumberSuffix', () => {

  test.skip('1 -> "1st"', () => {
    expect(addNumberSuffix(1)).toEqual('1st')
  })

  test.skip('2 -> "2nd"', () => {
    expect(addNumberSuffix(2)).toEqual('2nd')
  })

  test.skip('3 -> "3rd"', () => {
    expect(addNumberSuffix(3)).toEqual('3rd')
  })

  test.skip('4 -> "4th"', () => {
    expect(addNumberSuffix(4)).toEqual('4th')
  })

  test.skip('11 -> "11th"', () => {
    expect(addNumberSuffix(11)).toEqual('11th')
  })

  test.skip('12 -> "12th"', () => {
    expect(addNumberSuffix(12)).toEqual('12th')
  })

  test.skip('13 -> "13th"', () => {
    expect(addNumberSuffix(13)).toEqual('13th')
  })

  test.skip('521 -> "521st"', () => {
    expect(addNumberSuffix(521)).toEqual('521st')
  })

  test.skip('1092 -> "1092nd"', () => {
    expect(addNumberSuffix(1092)).toEqual('1092nd')
  })

  test.skip('333 -> "333rd"', () => {
    expect(addNumberSuffix(333)).toEqual('333rd')
  })

  test.skip('500 -> "500th"', () => {
    expect(addNumberSuffix(500)).toEqual('500th')
  })

  test.skip('111 -> "111th"', () => {
    expect(addNumberSuffix(111)).toEqual('111th')
  })

  test.skip('612 -> "612th"', () => {
    expect(addNumberSuffix(612)).toEqual('612th')
  })

  test.skip('2513 -> "2513th"', () => {
    expect(addNumberSuffix(2513)).toEqual('2513th')
  })

})