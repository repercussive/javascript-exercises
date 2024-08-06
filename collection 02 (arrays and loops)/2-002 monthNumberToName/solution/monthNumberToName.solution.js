const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function monthNumberToName(monthNumberAsString) {
  const monthNumber = Number(monthNumberAsString)
  
  if (monthNumber === NaN) {
    return undefined
  }

  return months[monthNumber - 1]
}