# `calculateSegmentCutPositions`

## Scenario

You're building a piece of furniture. In the process, you need to cut this plank of wood, which is `120cm` long, into three equal segments.

![](https://gcdnb.pbrd.co/images/UWtfkNQn4j2D.png?o=1)

You want to know where to make cuts, but you don't feel like calculating it yourself. So, naturally, you decide to write a program to calculate it for you.

## Task

Write a function that, given:
- the length of an object
- the **number of segments** to divide the object into

will return an array containing the *positions* at which to make the necessary cuts.

**Example**: *to cut a 120cm long plank of wood into 3 segments, we should have to make 2 cuts at positions 40cm and 80cm respectively.*

```js
calculateSegmentCutPositions(120, 3) // returns [40, 80]
```

## Hints

- [array `push` method](https://devdocs.io/javascript/global_objects/array/push)