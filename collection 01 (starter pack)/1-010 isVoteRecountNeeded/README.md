# `isVoteRecountNeeded`

## Scenario

In elections, vote-counting processes are generally quite accurate. Optical-scanning voting machines, for example, are able to scan voters' ballots and automatically tally the results, which mitigates the risk of human error.

However, a small percentage of voters may mark their ballot in a way that can't be read by a voting machine. For example, a voter might circle a candidate's name instead of putting an X next to it. An electronic voting machine may ignore these ballots, even if they would have been considered valid in a hand-count.

Usually, the this is not relevant as it does not typically sway the outcomes of an election. However, if the margin of victory is very small, this may call into question the accuracy of the results. In such cases, a more rigorous **vote recount** may be needed.

For example: in the state of Minnesota (USA), for federal and statewide office elections, **an automatic recount occurs if the margin of victory is within 0.25% of the total votes cast for the office.** 

You wish to create a program which, given the votes for an election with two candidates, will determine whether a vote recount is needed, based on the Minnesotan system described above.

## Task

Write a function that receives:
- the number of votes for candidate A
- the number of votes for candidate B

and returns `true` or `false` depending on whether the margin of victory is within 0.25% of the total votes cast.

```js
isVoteRecountNeeded(1000, 1000) // returns true
isVoteRecountNeeded(1000, 5000) // returns false
```

## Hints

- [`Math.abs` method](https://devdocs.io/javascript/global_objects/math/abs)