# `calculateRemainingAnnualLeave`

##  Scenario

You are building an annual leave booking platform for employees at your company. Currently, you are working on a feature that allows employees to see how many days of annual leave they have remaining, given the holidays they have already booked within the year.

## Task

Write a function that, given:
- the employee's total leave allowance for the year (in days)
- an array which represents the durations (in days) of all holidays which the employee has taken during the year

returns the number of available leave days remaining.

```js
remainingAnnnualLeave(25, [2, 3]) // returns 5
```