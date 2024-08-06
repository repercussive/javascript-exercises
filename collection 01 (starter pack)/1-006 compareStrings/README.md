# `compareStrings`

## Task

Write a function that takes a two strings and returns `true` if they match, or `false` otherwise. Case and leading/trailing whitespace should be disregarded.

```js
compareStrings("hello", "hello")        // returns true
compareStrings("HELLO", "hello")        // returns true
compareStrings("     hello", "hello")   // returns true

compareStrings("hello", "goodbye")      // returns false
```

## Hints

- [string `trim` method](https://devdocs.io/javascript/global_objects/string/trim)
- [string `toLowerCase` method](https://devdocs.io/javascript/global_objects/string/tolowercase)