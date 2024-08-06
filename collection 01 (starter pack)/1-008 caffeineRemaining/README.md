# `caffeineRemaining`

## Scenario

You are creating an app for coffee drinkers (and coffee quitters) to help them understand how much caffeine is left in their body a certain period of time after drinking coffee.

❗ For the sake of this task, assume that caffeine has a **half-life of 6 hours** within the body.

That means, every 6 hours, the amount of caffeine left in your system will have reduced by half.

For example:
- Suppose you ingest `100mg` of caffeine at 12 noon.
- 6 hours later, at 6pm, there is `50mg` caffeine left in your system;
- 6 hours later, at midnight, there is `25mg` caffeine left in your system;
- and so on.

![](https://gcdnb.pbrd.co/images/oRhOOQPAv6d4.png?o=1)


## Task

Write a function that, given:
- the initial dose of caffeine
- the amount of time elapsed (in hours)

will return the amount of caffeine left in the body after the elapsed time.

```js
caffeineRemaining(100, 18) // returns 12.5
```

## Half-life formula

To calculate how much caffeine remains after a period of time, you can use the half-life formula:

$A(t) = A_0 \left( \frac{1}{2} \right)^{\frac{t}{T_{1/2}}}$

Where:
- $A(t)$ is the amount of the substance left after time $t$.
- $A_0$ is the initial amount of the substance.
- $T_{1/2}$ is the half-life of the substance.
- $t$ is the elapsed time.

Given:
- The half-life of caffeine, $T_{1/2} = 6$ hours.

Let's denote:
- $A_0$ as the initial amount of caffeine.
- $t$ as the time elapsed in hours.

Then, the formula becomes:

$A(t) = A_0 \left( \frac{1}{2} \right)^{\frac{t}{6}}$

This formula can be used to calculate the remaining caffeine in the body after any given time $t$.

### Example calculation

If the initial amount of caffeine $A_0$ is 200 mg, and you want to find out how much caffeine is left after 9 hours, you would plug the values into the formula:

$A(9) = 200 \left( \frac{1}{2} \right)^{\frac{9}{6}}$

So:

$A(9) = 200 \times 0.354 \approx 70.8 \text{ mg}$

After 9 hours, approximately 70.8 mg of caffeine would remain in the body.

## Hints

- [`Math.pow` method](https://devdocs.io/javascript/global_objects/math/pow)