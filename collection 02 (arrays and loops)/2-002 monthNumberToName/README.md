# `monthNumberToName`

##  Scenario

You are creating a program for students to view their upcoming exam dates.

The dates are currently in the format "2024-06-01", however the students would prefer to see the date in a more readable format, e.g. "1 June 2024".

You wish to write a program that will convert dates into this more readable format.

For now, we will just focus on the part where we convert the month number (e.g. `"06"`) to the month's name (`"June"`).

## Task

Write a function that, given a month number as a string, returns the name of that month in English.

```js
monthNumberToName('06') // returns 'June'
```