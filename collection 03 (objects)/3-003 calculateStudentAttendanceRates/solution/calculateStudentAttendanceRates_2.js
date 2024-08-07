// Here's an alternative using the reduce() method (https://javascript.info/array-methods#reduce-reduceright)

function calculateStudentAttendanceRates(studentAttendanceData) {
  return studentAttendanceData.reduce((accumulatedResult, student) => {
    let attendanceRate = calculateSingleAttendanceRate(student.attendance)
    accumulatedResult[`${student.firstName} ${student.lastName}`] = `${(attendanceRate * 100).toFixed(2)}%`
    return accumulatedResult
  }, {})
}

function calculateSingleAttendanceRate(attendanceArray) {
  let daysAttended = attendanceArray.reduce((total, didAttend) => total += didAttend ? 1 : 0, 0)
  return daysAttended / attendanceArray.length  
}