# `convertTextToBoolean`

## Scenario

You sent out a survey to your friends to find out if they think pineapple belongs on pizza. But these are the survey responses:
- "yes"
- "YES"
- "no"
- "i don't like pizza"
- "No"
- "y"
- "n"

Because the responses are all in different formats, this makes it impossible for you to turn the data into a bar chart. And you really, really want to show your friends a bar chart.

So, you decide to create a function that will normalise the responses to `true` or `false`.

## Task

Write a function that receives a string as a parameter, and returns `true` or `false` depending on whether it maps to "yes" or "no".

```js
convertTextToBoolean('yes')   // returns true
convertTextToBoolean('y')     // returns true

convertTextToBoolean('no')    // returns false
convertTextToBoolean('n')     // returns false
```

## Hints

- [string `toLowerCase` method](https://devdocs.io/javascript/global_objects/string/tolowercase)