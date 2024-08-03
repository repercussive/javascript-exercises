function generateOrderConfirmationMessage(productName, expressDelivery) {
  const deliveryWindow = expressDelivery ? '1-2' : '3-5'
  return `Thank you for your order of ${productName}. We aim to deliver within ${deliveryWindow} working days.`
}