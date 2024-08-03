import snakeCaseToCamelCase from './snakeCaseToCamelCase'

describe('snakeCaseToCamelCase', () => {

  test.skip('Has no effect on single words', () => {
    expect(snakeCaseToCamelCase('hello')).toEqual('hello')
  })

  test.skip('Works for snake-case strings containing two words', () => {
    expect(snakeCaseToCamelCase('hello_world')).toEqual('helloWorld')
  })

  test.skip('Works for snake-case strings containing many words', () => {
    expect(snakeCaseToCamelCase('multi_word_variable_name')).toEqual('multiWordVariableName')
  })

  test.skip('Works for snake-case strings containing numbers', () => {
    expect(snakeCaseToCamelCase('convert_2_camel_case')).toEqual('convert2CamelCase')
  })

  test.skip('Works for snake-case strings containing capital letters', () => {
    expect(snakeCaseToCamelCase('Camelise_These_Capitals')).toEqual('cameliseTheseCapitals')
  })

  test.skip('Works for snake-case strings written in all uppercase', () => {
    expect(snakeCaseToCamelCase('CHILL_OUT')).toEqual('chillOut')
  })

})