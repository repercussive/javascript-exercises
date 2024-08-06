# `isUsernameValid`

## Task
Write a function that receives a username as a parameter, and based on the [valid username requirements](#valid-username-requirements), returns `true` if the username is valid, and `false` otherwise.

```js
isUsernameValid('bob99')  // returns true
isUsernameValid('')       // returns false
```

***Note***: The exercises after this one will not have parameters provided as this one does - you'll need to provide them yourself from now on. Read the test cases (and each exercise's README) carefully to understand what kinds of parameters will be expected.

***Remember***: All the tests in the `.test.js` file are disabled by default. You will need to enable them by deleting the `.skip` from the `test.skip()` function.


## Valid username requirements

To be valid, a username must be between 5 and 16 characters long (inclusive).

## Hints

- [string `length` property](https://devdocs.io/javascript/global_objects/string/length)