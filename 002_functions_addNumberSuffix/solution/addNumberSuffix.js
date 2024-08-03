function addNumberSuffix(number) {
  // mod100 represents the number from the tens place onwards, e.g. 611 mod 100 = 11
  let mod100 = number % 100

  // exception to the rule: if number ends in 11, 12, or 13, the suffix is always "th"
  if (mod100 >= 11 && mod100 <= 13) {
    return `${number}th`
  }

  // mod10 represents only the last digit of the number, e.g. 1042 mod 10 = 2 
  let mod10 = number % 10

  // normal suffix rules apply from here on out
  switch (mod10) {
    case 1:
      return `${number}st`
    case 2: 
      return `${number}nd`
    case 3:
      return `${number}rd`
    default:
      return `${number}th`
  }
}