function calculateSegmentCutPositions(objectLength, numberOfSegments) {
  if (numberOfSegments <= 0) return undefined

  let cuts = []

  for (let i = 1; i < numberOfSegments; i++) {
    cuts.push(objectLength / numberOfSegments * i)
  }

  return cuts
}