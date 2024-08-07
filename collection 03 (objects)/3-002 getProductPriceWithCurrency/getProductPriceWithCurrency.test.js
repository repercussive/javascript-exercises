import getProductPriceWithCurrency from './getProductPriceWithCurrency'

describe('getProductPriceWithCurrency', () => {
  test.skip('Works for a user from the UK', () => {
    const productInfo = {
      name: 'Nintendo Switch',
      starRating: 4.8,
      price: {
        gbp: 279.99,
        usd: 349.99,
        eur: 299.99
      }
    }

    const userInfo = {
      firstName: 'Alice',
      lastName: 'Green',
      region: {
        regionName: 'United Kingdom',
        currencyId: 'gbp',
        currencySymbol: '£'
      }
    }

    expect(getProductPriceWithCurrency(productInfo, userInfo)).toEqual('£279.99')
  })

  test.skip('Works for a user from the USA', () => {
    const productInfo = {
      name: 'Nintendo Switch',
      starRating: 4.8,
      price: {
        gbp: 279.99,
        usd: 349.99,
        eur: 299.99
      }
    }

    const userInfo = {
      firstName: 'Bob',
      lastName: 'White',
      region: {
        regionName: 'United States',
        currencyId: 'usd',
        currencySymbol: '$'
      }
    }

    expect(getProductPriceWithCurrency(productInfo, userInfo)).toEqual('$349.99')
  })

  test.skip('If the user does not have an associated region, defaults to GBP (£)', () => {
    const productInfo = {
      name: 'PS5',
      starRating: 4.6,
      price: {
        gbp: 429.99,
        usd: 499.99,
        eur: 479.99
      }
    }

    const userInfo = {
      firstName: 'Charlie',
      lastName: 'Brown'
    }

    expect(getProductPriceWithCurrency(productInfo, userInfo)).toEqual('£429.99')
  })
})