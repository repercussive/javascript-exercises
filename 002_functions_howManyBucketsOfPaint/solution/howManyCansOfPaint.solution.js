function howManyCansOfPaint(surfaceAreaToPaint, canVolumeLitres) {
  // Assume that 1 litre of paint can cover a surface area of 10m²
  let coveragePerCan = canVolumeLitres * 10
  return Math.ceil(surfaceAreaToPaint / coveragePerCan)
}