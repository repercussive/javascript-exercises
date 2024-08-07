# `calculateStudentAttendanceRates`

## Scenario

You are building a program for a local school to summarise students' attendance rates, so that they can investigate any unusual attendance patterns.

## Task

Write a function that, given an an **array of objects** representing students' attendance data, returns an **object** which aggregates the attendance data.

For example, given:
```js
let attendanceData = [
  {
    firstName: 'Alice',
    lastName: 'Green',
    attendance: [true, true, true, false, true]
  },
  {
    firstName: 'Bob',
    lastName: 'White',
    attendance: [true, true, false, false, true]
  },
  {
    firstName: 'Charlie',
    lastName: 'Brown',
    attendance: [true, false, false, false, false]
  }
]
```

And, provided that an attendance array such as `[true, true, true, false, true]` represents a sequence of days, where `true` means the student was present and `false` means the student was absent, then:
```js
calculateStudentAttendanceRates(studentAttendanceData) 
// returns the following object:
{
  'Alice Green': '80.00%',
  'Bob White': '60.00%',
  'Charlie Brown': '20.00%' 
}
```

## Hints

- [number `toFixed` method](https://devdocs.io/javascript/global_objects/number/tofixed)