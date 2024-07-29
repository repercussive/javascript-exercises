function caffeineRemaining(initialDose, elapsedTimeHours) {
  return initialDose * Math.pow(0.5, elapsedTimeHours / 6)
}