import helloWorld from './helloWorldFunction'

describe('helloWorld', () => {

  test.skip('It returns the string "Hello, world!"', () => {
    expect(helloWorld()).toEqual('Hello, world!')
  })

})