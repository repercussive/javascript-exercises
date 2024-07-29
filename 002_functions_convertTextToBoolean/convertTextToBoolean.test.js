import convertTextToBoolean from './convertTextToBoolean'

describe('convertTextToBoolean', () => {

  test.skip('Converts "yes" to true', () => {
    expect(convertTextToBoolean('yes')).toBe(true)
  })

  test.skip('Converts "y" to true', () => {
    expect(convertTextToBoolean('y')).toBe(true)
  })

  test.skip('Converts "no" to false', () => {
    expect(convertTextToBoolean('no')).toBe(false)
  })

  test.skip('Converts "n" to false', () => {
    expect(convertTextToBoolean('n')).toBe(false)
  })

  test.skip('Converts "yes" to true regardless of case', () => {
    expect(convertTextToBoolean('yEs')).toBe(true)
  })

  test.skip('Converts "no" to false regardless of case', () => {
    expect(convertTextToBoolean('No')).toBe(false)
  })

  test.skip('Returns undefined for unhandled values', () => {
    expect(convertTextToBoolean('maybe')).toBeUndefined()
  })

  
})