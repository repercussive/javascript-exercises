import calculateMultipleChoiceQuizScore from './calculateMultipleChoiceQuizScore'

describe('calculateMultipleChoiceQuizScore', () => {

  test.skip('Calculates the correct score when all answers are correct', () => {
    let studentAnswers = ['B', 'C', 'A', 'A', 'D', 'C']
    let correctAnswers = ['B', 'C', 'A', 'A', 'D', 'C']

    expect(calculateMultipleChoiceQuizScore(studentAnswers, correctAnswers))
      .toBe(6)
  })

  test.skip('Calculates the correct score when some answers are correct', () => {
    let studentAnswers = ['A', 'B', 'D', 'D', 'A']
    let correctAnswers = ['A', 'B', 'C', 'D', 'E']

    expect(calculateMultipleChoiceQuizScore(studentAnswers, correctAnswers))
      .toBe(3)
  })

  test.skip('Calculates the correct score when no answers are correct', () => {
    let studentAnswers = ['A', 'B', 'C']
    let correctAnswers = ['C', 'A', 'B']

    expect(calculateMultipleChoiceQuizScore(studentAnswers, correctAnswers))
      .toBe(0)
  })

})