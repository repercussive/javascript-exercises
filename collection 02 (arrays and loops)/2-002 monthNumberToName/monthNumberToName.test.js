import monthNumberToName from './monthNumberToName'

describe('monthNumberToName', () => {

  test.skip('Returns undefined if number is invalid', () => {
    expect(monthNumberToName(0)).toBeUndefined()
    expect(monthNumberToName(13)).toBeUndefined()
  })

  test.skip('Converts 1 to January', () => {
    expect(monthNumberToName(1)).toEqual('January')
  })

  test.skip('Converts 2 to February', () => {
    expect(monthNumberToName(2)).toEqual('February')
  })

  test.skip('Converts 3 to March', () => {
    expect(monthNumberToName(3)).toEqual('March')
  })

  test.skip('Converts 4 to April', () => {
    expect(monthNumberToName(4)).toEqual('April')
  })

  test.skip('Converts 5 to May', () => {
    expect(monthNumberToName(5)).toEqual('May')
  })

  test.skip('Converts 6 to June', () => {
    expect(monthNumberToName(6)).toEqual('June')
  })

  test.skip('Converts 7 to July', () => {
    expect(monthNumberToName(7)).toEqual('July')
  })

  test.skip('Converts 8 to August', () => {
    expect(monthNumberToName(8)).toEqual('August')
  })

  test.skip('Converts 9 to September', () => {
    expect(monthNumberToName(9)).toEqual('September')
  })

  test.skip('Converts 10 to October', () => {
    expect(monthNumberToName(10)).toEqual('October')
  })

  test.skip('Converts 11 to November', () => {
    expect(monthNumberToName(11)).toEqual('November')
  })

  test.skip('Converts 12 to December', () => {
    expect(monthNumberToName(12)).toEqual('December')
  })

})