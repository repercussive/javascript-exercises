# `addNumberSuffix`

## Task

Write a function that, given a number, returns a string with the number's [ordinal suffix](https://en.wikipedia.org/wiki/Ordinal_numeral) attached.

```js
addNumberSuffix(5)      // returns '5th'
addNumberSuffix(23)     // returns '23rd'
addNumberSuffix(22)     // returns '22nd'
```

## Suffix rules

- `-st` is used with numbers ending in 1 (e.g. 1st)
- `-nd` is used with numbers ending in 2 (e.g. 22nd)
- `-rd` is used with numbers ending in 3 (e.g. 33rd)
- However, as an exception to the rules above, numbers ending with 11, 12, and 13 use `-th` (e.g. 11th, 212th, 513th)
- `th` is used for all other numbers (e.g. 9th)

## Hints

- [Modulo/remainder operator (%)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)