# `isLeapYear`

## Task

Write a function that receives a [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) year, and returns `true` or `false` depending on whether that year is a leap year (as determined by the [leap year rules](#leap-year-rules)).

```js
isLeapYear(2024)  // returns true
isLeapYear(2025)  // returns false
```

## Leap year rules

A leap year is a year with an extra day added (February 29). These are observed periodically to balance the discrepancy between a typical calendar year (365 days) and a solar year (365 days, 5 hours, 48 minutes, and 46 seconds - the time it takes for our planet to complete an orbit around the sun).

The rules for leap years can be a bit confusing.

- Normally, leap years occur **every 4 years**.
  - e.g. `2020`, `2024`, `2028` are leap years

- However, if a year is **divisible by 100**, then it is not a leap year, unless it is also **divisible by 400**.
  - e.g. `1700`, `1800`, `1900` are not leap years as they are divisible by 100; however, `2000` is a leap year as it is divisible by 400.

## Hints

- [Modulo/remainder operator (%)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)