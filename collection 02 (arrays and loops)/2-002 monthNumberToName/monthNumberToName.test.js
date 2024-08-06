import monthNumberToName from './monthNumberToName'

describe('monthNumberToName', () => {

  // ⚠️ This is just a meta check to dissuade you from writing a dozen if/else statements
  // There is a better way :)
  test('Your function should be no longer than ten lines of code', () => {
    let lineCount = monthNumberToName.toString().split('\n').length - 2
    expect(lineCount).toBeLessThanOrEqual(10)
  })

  test.skip('Returns undefined if number is invalid', () => {
    expect(monthNumberToName('0')).toBeUndefined()
    expect(monthNumberToName('13')).toBeUndefined()
  })

  test.skip('Returns undefined if argument is not a number', () => {
    expect(monthNumberToName('apple')).toBeUndefined()
  })

  test.skip('Converts "01" to January', () => {
    expect(monthNumberToName('01')).toEqual('January')
  })

  test.skip('Works if there are too many leading zeroes', () => {
    expect(monthNumberToName('00000001')).toEqual('January')
  })

  test.skip('Works if there are no loading zeroes', () => {
    expect(monthNumberToName('1')).toEqual('January')
  })

  test.skip('Converts "02" to February', () => {
    expect(monthNumberToName('02')).toEqual('February')
  })

  test.skip('Converts "03" to March', () => {
    expect(monthNumberToName('03')).toEqual('March')
  })

  test.skip('Converts "04" to April', () => {
    expect(monthNumberToName('04')).toEqual('April')
  })

  test.skip('Converts "05" to May', () => {
    expect(monthNumberToName('05')).toEqual('May')
  })

  test.skip('Converts "06" to June', () => {
    expect(monthNumberToName('06')).toEqual('June')
  })

  test.skip('Converts "07" to July', () => {
    expect(monthNumberToName('07')).toEqual('July')
  })

  test.skip('Converts "08" to August', () => {
    expect(monthNumberToName('08')).toEqual('August')
  })

  test.skip('Converts "09" to September', () => {
    expect(monthNumberToName('09')).toEqual('September')
  })

  test.skip('Converts 10 to October', () => {
    expect(monthNumberToName('10')).toEqual('October')
  })

  test.skip('Converts 11 to November', () => {
    expect(monthNumberToName('11')).toEqual('November')
  })

  test.skip('Converts 12 to December', () => {
    expect(monthNumberToName('12')).toEqual('December')
  })

})