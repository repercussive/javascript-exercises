# `snakeCaseToCamelCase`

## Scenario

A talented new developer has joined your JavaScript development team. However, they have been coding in Python for 20 years, and old habits die hard. The new developer has written quite a few variables and functions in the team's JavaScript code using the [`snake_case` naming convention](https://en.wikipedia.org/wiki/Snake_case), which clashes with the JavaScript convention of [`camelCase`](https://en.wikipedia.org/wiki/Camel_case).

To speed up the process of fixing this, you wish to write a program that converts `snake_case` strings into `camelCase`.

## Task

Write a function that takes a `snake_case` string and returns its `camelCase` equivalent.

```js
snakeCaseToCamelCase('hello_world') // returns "helloWorld"
```