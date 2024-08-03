import calculateSegmentCutPositions from './calculateSegmentCutPositions'

describe('calculateSegmentCutPositions', () => {

  test.skip('Cutting 100cm into 2 segments: returns a single cut at position 50cm', () => {
    let objectLength = 100
    let numberOfSegments = 2

    expect(calculateSegmentCutPositions(objectLength, numberOfSegments))
      .toEqual([50])
  })

  test.skip('Cutting 10cm into 5 segments: returns 4 cuts at positions 2cm, 4cm, 6cm, and 8cm respectively', () => {
    let objectLength = 10
    let numberOfSegments = 5

    expect(calculateSegmentCutPositions(objectLength, numberOfSegments))
      .toEqual([2, 4, 6, 8])
  })

  test.skip('Cutting an object into 1 segment: returns an empty array, as no cuts are needed', () => {
    let objectLength = 1000
    let numberOfSegments = 1

    expect(calculateSegmentCutPositions(objectLength, numberOfSegments))
      .toEqual([])
  })

  test.skip('Returns undefined if number of segments is 0', () => {
    let objectLength = 1000
    let numberOfSegments = 0

    expect(calculateSegmentCutPositions(objectLength, numberOfSegments))
      .toBeUndefined()
  })

  test.skip('Returns undefined if number of segments is negative', () => {
    let objectLength = 1000
    let numberOfSegments = -1

    expect(calculateSegmentCutPositions(objectLength, numberOfSegments))
      .toBeUndefined()
  })

})