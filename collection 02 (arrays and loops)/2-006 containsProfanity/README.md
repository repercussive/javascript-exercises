# `containsProfanity`

##  Scenario

You are building a text chat system for a video game. As the game is intended to be enjoyed by people of all ages, the chat needs to be family-friendly. So, you are currently working on a profanity filter to prevent disgusting words like *stinky* and *heck* from being seen by innocent children.

## Task

Write a function that, given a message as a parameter, returns `true` if the message contains any of the [forbidden words](#forbidden-words), and `false` otherwise.

```js
containsProfanity('hi there')     // returns false
containsProfanity('ur stinky')    // returns true
```

## Forbidden words

- stinky
- heck
- fudge