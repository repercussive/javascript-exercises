import generateOrderConfirmationMessage from './generateOrderConfirmationMessage'

describe('generateOrderConfirmationMessage', () => {

  test.skip('Generates correct message when express delivery is selected', () => {
    let productName = 'Nintendo Switch'
    let expressDelivery = true

    expect(generateOrderConfirmationMessage(productName, expressDelivery))
      .toEqual('Thank you for your order of Nintendo Switch. We aim to deliver within 1-2 working days.')
  })

  test.skip('Generates correct message when express delivery is not selected', () => {
    let productName = 'PS5'
    let expressDelivery = false

    expect(generateOrderConfirmationMessage(productName, expressDelivery))
      .toEqual('Thank you for your order of PS5. We aim to deliver within 3-5 working days.')
  })

})