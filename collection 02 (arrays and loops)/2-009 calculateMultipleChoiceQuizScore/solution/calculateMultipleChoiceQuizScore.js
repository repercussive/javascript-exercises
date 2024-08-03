function calculateMultipleChoiceQuizScore(studentAnswers, correctAnswers) {
  let score = 0

  for (let i = 0; i < correctAnswers.length; i++) {
    const studentAnswer = studentAnswers[i]
    const correctAnswer = correctAnswers[i]

    if (studentAnswer === correctAnswer) {
      score++
    }
  }

  return score
}
