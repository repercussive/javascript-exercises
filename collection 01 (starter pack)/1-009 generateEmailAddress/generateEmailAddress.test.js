import generateEmailAddress from './generateEmailAddress'

describe('generateEmailAddress', () => {

  test.skip('Generates correct email address', () => {
    let firstName = 'alice'
    let lastName = 'green'
    let domain = 'example.com'

    expect(generateEmailAddress(firstName, lastName, domain))
      .toEqual('agreen@example.com')
  })

  test.skip('Trims whitespace', () => {
    let firstName = '     bob      '
    let lastName = '     smith        '
    let domain = '         test.co.uk      '

    expect(generateEmailAddress(firstName, lastName, domain))
      .toEqual('bsmith@test.co.uk')
  })

  test.skip('Always generates email in lowercase', () => {
    let firstName = 'CATHY'
    let lastName = 'jOnEs'
    let domain = 'demo.ORG'

    expect(generateEmailAddress(firstName, lastName, domain))
      .toEqual('cjones@demo.org')
  })

})