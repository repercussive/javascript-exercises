function generateEmailAddress(firstName, lastName, domain) {
  let firstInitial = firstName.trim().substring(0, 1)
  let lastNameTrimmed = lastName.trim()
  let domainTrimmed = domain.trim()
  return `${firstInitial}${lastNameTrimmed}@${domainTrimmed}`.toLowerCase()
}