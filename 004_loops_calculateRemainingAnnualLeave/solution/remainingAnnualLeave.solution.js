function remainingAnnualLeave(totalDaysAvailable, holidays) {
  let daysRemaining = totalDaysAvailable

  for (let holidayDuration of holidays) {
    daysRemaining -= holidayDuration
  }

  return daysRemaining
}