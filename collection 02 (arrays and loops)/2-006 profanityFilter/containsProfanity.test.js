import containsProfanity from './containsProfanity'

/* 
NOTE: For the sake of this task, the words considered to be forbidden are:
- "stinky"
- "heck"
- "fudge"
*/

describe('containsProfanity', () => {

  test.skip('Returns false if message does not contain any forbidden words', () => {
    let message = 'this is a perfectly innocent message'
    expect(containsProfanity(message)).toBe(false)
  })

  test.skip('Returns true if message contains the word "stinky"', () => {
    let message = 'what would your mother say if she just heard you say "stinky"'
    expect(containsProfanity(message)).toBe(true)
  })

  test.skip('Returns true if message contains the word "heck"', () => {
    let message = 'watch your hecking profanity'
    expect(containsProfanity(message)).toBe(true)
  })

  test.skip('Returns true if message contains the word "fudge"', () => {
    let message = 'what the fudge'
    expect(containsProfanity(message)).toBe(true)
  })

  test.skip('Works regardless of case', () => {
    let message = 'there is no way in hEcK you are getting past this profanity filter'
    expect(containsProfanity(message)).toBe(true)
  })

})