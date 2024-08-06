# `howManyCansOfPaint`

## Scenario

You are writing a program for a hardware shop that sells paint cans. The program is designed to tell users how many cans of paint they need to purchase in order to cover a given surface area.

❗ *For the purposes of this task, assume that 1 litre of paint can cover a surface area of 10m²*.

For example, suppose Alice wishes to purchase cans of teal paint for her living room, with each can holding a volume of **1 litre** each. 

Alice wants to know how many paint cans she will need in order to paint the walls. The walls have a total combined surface area of 24m².

As each 1-litre paint can is able to cover 10m²:
- **2** paint cans would cover 20m², which is not enough for a surface area of 24m².
- **3** paint cans would cover 30m², which is plenty.
- Therefore, Alice has to buy **3 paint cans**.

## Task

Write a function that, given:
- the amount of surface area to paint
- the volume of a single paint can

returns the number of (whole) cans of paint required to paint the given surface area.

```js
// 24m² surface area, 1 litre paint cans

howManyCansOfPaint(24, 1) // returns 3
```