import howManyCansOfPaint from './howManyCansOfPaint'

// Assume that 1 litre of paint can cover a surface area of 10m²

describe('howManyCansOfPaint', () => {

  test.skip('Works for exactly 1 paint can', () => {
    let surfaceAreaToPaint = 50    // m²
    let paintCanVolume = 5         // litres
    expect(howManyCansOfPaint(surfaceAreaToPaint, paintCanVolume)).toEqual(1)
  })

  test.skip('Returns 1 whole paint can even for a tiny surface area', () => {
    let surfaceAreaToPaint = 0.1     // m²
    let paintCanVolume = 10          // litres
    expect(howManyCansOfPaint(surfaceAreaToPaint, paintCanVolume)).toEqual(1)
  })

  test.skip('Does not return fractional paint cans', () => {
    let surfaceAreaToPaint = 101     // m²
    let paintCanVolume = 2.5         // litres
    expect(howManyCansOfPaint(surfaceAreaToPaint, paintCanVolume)).toEqual(5)
  })
})