function isLeapYear(year) {
  const isYearDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisibleByFourHundred = year % 400 === 0;

  return isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)
}