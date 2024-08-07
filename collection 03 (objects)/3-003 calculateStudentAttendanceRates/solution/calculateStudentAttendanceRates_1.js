function calculateStudentAttendanceRates(studentAttendanceData) {
  let result = {}

  for (let student of studentAttendanceData) {
    let attendanceRatePercentage = (calculateSingleAttendanceRate(student.attendance) * 100).toFixed(2) 
    result[`${student.firstName} ${student.lastName}`] = `${attendanceRatePercentage}%`
  }

  return result
}

function calculateSingleAttendanceRate(attendanceArray) {
  let daysAttended = 0
  for (let value of attendanceArray) {
    if (value === true) daysAttended++
  }
  return daysAttended / attendanceArray.length
}