import getFormattedDeliveryAddress from './getFormattedDeliveryAddress'

describe('getFormattedDeliveryAddress', () => {
  test.skip('Formats delivery address correctly', () => {
    let deliveryDetails = {
      orderDate: '2024-08-07',
      recipientDetails: {
        firstName: 'Alice',
        lastName: 'Green',
        title: 'Ms'
      },
      destination: {
        type: 'Home',
        address: {
          buildingNumber: '123',
          streetName: 'JavaScript Street',
          city: 'Codetown',
          postcode: 'JV4 SCPT'
        }
      }
    }

    expect(getFormattedDeliveryAddress(deliveryDetails)).toEqual('123 JavaScript Street, Codetown JV4 SCPT')
  })

  test.skip('Returns "MISSING ADDRESS" if address object is not present', () => {
    let deliveryDetails = {
      orderDate: '2024-08-07',
      destination: {
        type: 'Business',
      }
    }

    expect(getFormattedDeliveryAddress(deliveryDetails)).toEqual('MISSING ADDRESS')
  })

  test.skip('Returns "MISSING ADDRESS" if address object is empty', () => {
    let deliveryDetails = {
      orderDate: '2024-08-07',
      destination: {
        type: 'Business',
        address: {}
      }
    }

    expect(getFormattedDeliveryAddress(deliveryDetails)).toEqual('MISSING ADDRESS')
  })

  test.skip('Does not modify the original object', () => {
    const originalObject = {
      orderDate: '2024-08-07',
      destination: {
        type: 'Home',
        address: { buildingNumber: '123', streetName: 'JavaScript Street', city: 'Codetown', postcode: 'JV4 SCPT' }
      }
    }

    getFormattedDeliveryAddress(originalObject)

    expect(originalObject).toEqual({
      orderDate: '2024-08-07',
      destination: {
        type: 'Home',
        address: { buildingNumber: '123', streetName: 'JavaScript Street', city: 'Codetown', postcode: 'JV4 SCPT' }
      }
    })
  })
})