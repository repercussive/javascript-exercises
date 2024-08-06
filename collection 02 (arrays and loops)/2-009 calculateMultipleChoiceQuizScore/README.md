# `calculateMultipleChoiceQuizScore`

## Scenario

You wish to create a program for school teachers to help them quickly grade their students' [multiple choice](https://en.wikipedia.org/wiki/Multiple_choice) quizzes.

## Task

Write a function that, given:
- the *correct* answers for a multiple choice quiz
- a *student's answers* for the same multiple choice questions

will return the student's total score, i.e. the number of questions they answered correctly.

```js
calculateMultipleChoiceQuizScore(
  ['A', 'A', 'B', 'B'], 
  ['A', 'A', 'B', 'C']
) // returns 3
```
