import isVoteRecountNeeded from './isVoteRecountNeeded'

describe('isVoteRecountNeeded', () => {

  test.skip('Returns false if difference in votes is greater than 0.25% of total votes cast', () => {
    let votesForCandidateA = 50000
    let votesForCandidateB = 50251
    expect(isVoteRecountNeeded(votesForCandidateA, votesForCandidateB)).toBe(false)
  })

  test.skip('Returns true if votes are equal for both candidates', () => {
    let votesForCandidateA = 50000
    let votesForCandidateB = 50000
    expect(isVoteRecountNeeded(votesForCandidateA, votesForCandidateB)).toBe(true)
  })

  test.skip('Returns true if difference in votes cast is within 0.25% of total votes cast', () => {
    let votesForCandidateA = 50000
    let votesForCandidateB = 50250
    expect(isVoteRecountNeeded(votesForCandidateA, votesForCandidateB)).toBe(true)
  })

})