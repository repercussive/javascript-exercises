function isVoteRecountAvailable(votesForCandidateA, votesForCandidateB) {
  const difference = Math.abs(votesForCandidateA - votesForCandidateB)
  const totalVotes = votesForCandidateA + votesForCandidateB
  return (difference / totalVotes) <= 0.0025
}