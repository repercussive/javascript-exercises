function getFormattedDeliveryAddress(deliveryDetails) {
  const address = deliveryDetails.destination.address

  if (address === undefined || Object.keys(address).length === 0) {
    return 'MISSING ADDRESS'
  }

  const { buildingNumber, streetName, city, postcode } = address
  
  return `${buildingNumber} ${streetName}, ${city} ${postcode}`
}