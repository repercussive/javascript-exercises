import calculateStudentAttendanceRates from './calculateStudentAttendanceRates'

describe('calculateStudentAttendanceRates', () => {

  test.skip('Works for mixed attendance', () => {
    let studentAttendanceData = [
      {
        firstName: 'Alice',
        lastName: 'Green',
        attendance: [true, true, true, false, true]
      },
      {
        firstName: 'Bob',
        lastName: 'White',
        attendance: [true, true, false, false, true]
      },
      {
        firstName: 'Charlie',
        lastName: 'Brown',
        attendance: [true, false, false, false, false]
      }
    ]

    expect(calculateStudentAttendanceRates(studentAttendanceData)).toEqual({
      'Alice Green': '80.00%',
      'Bob White': '60.00%',
      'Charlie Brown': '20.00%'
    })
  })

  test.skip('Works for full attendance', () => {
    let studentAttendanceData = [
      {
        firstName: 'Alice',
        lastName: 'Green',
        attendance: [true, true, true, true, true]
      },
      {
        firstName: 'Bob',
        lastName: 'White',
        attendance: [true, true, true, true, true]
      },
      {
        firstName: 'Charlie',
        lastName: 'Brown',
        attendance: [true, true, true, true, true]
      }
    ]

    expect(calculateStudentAttendanceRates(studentAttendanceData)).toEqual({
      'Alice Green': '100.00%',
      'Bob White': '100.00%',
      'Charlie Brown': '100.00%'
    })
  })

  test.skip('Works for zero attendance', () => {
    let studentAttendanceData = [
      {
        firstName: 'Alice',
        lastName: 'Green',
        attendance: [false, false, false, false, false]
      },
      {
        firstName: 'Bob',
        lastName: 'White',
        attendance: [false, false, false, false, false]
      },
      {
        firstName: 'Charlie',
        lastName: 'Brown',
        attendance: [false, false, false, false, false]
      }
    ]

    expect(calculateStudentAttendanceRates(studentAttendanceData)).toEqual({
      'Alice Green': '0.00%',
      'Bob White': '0.00%',
      'Charlie Brown': '0.00%'
    })
  })

  test.skip('Rounds percentage to 2 decimal places', () => {
    let studentAttendanceData = [
      {
        firstName: 'Alice',
        lastName: 'Green',
        attendance: [true, false, false, false, false, false, false]
      }
    ]

    expect(calculateStudentAttendanceRates(studentAttendanceData)).toEqual({
      'Alice Green': '14.29%'
    })
  })

  test.skip('If there are no students in the data, returns empty object', () => {
    let studentAttendanceData = []
    expect(calculateStudentAttendanceRates(studentAttendanceData)).toEqual({})
  })

})