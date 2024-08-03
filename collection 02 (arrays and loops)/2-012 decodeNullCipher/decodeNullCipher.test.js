import decodeNullCipher from './decodeNullCipher'

describe('decodeNullCipher', () => {

  test.skip('Decodes "hxeplalmo" -> "hello"', () => {
    let encodedMessage = 'hxeplalmo'
    expect(decodeNullCipher(encodedMessage)).toEqual('hello')
  })

  test.skip('Decodes "hail" -> "hi"', () => {
    let encodedMessage = 'hail'
    expect(decodeNullCipher(encodedMessage)).toEqual('hi')
  })

  test.skip('Decodes "tohliaso eimsa laz esaegcpreeeti amiezsussaigle" -> "this is a secret message"', () => {
    let encodedMessage = 'tohliaso eimsa laz esaegcpreeeti amiezsussaigle'
    expect(decodeNullCipher(encodedMessage)).toEqual('this is a secret message')
  })

  test.skip('Empty string is decoded to empty string', () => {
    let encodedMessage = ''
    expect(decodeNullCipher(encodedMessage)).toEqual('')
  })

  test.skip.each([
    ['moelelti amies suynjdaearo otohuet etireeses saptu idrussek', 'meet me under the tree at dusk'],
    ['meyi ahsefawrito dipsa eyeonumrask', 'my heart is yours'],
    ['woet swoimlvls fsuteowramz xtchjep lcuatsytclvez badts lnmoyosn', 'we will storm the castle at noon'],
  ])('Sample tests: "%s" is decoded to "%s"', (encodedMessage, decodedMessage) => {
    expect(decodeNullCipher(encodedMessage)).toEqual(decodedMessage)
  })

})