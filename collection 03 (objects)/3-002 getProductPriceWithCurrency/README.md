# `getProductPriceWithCurrency`

##  Scenario

You are working on the front-end website for a global e-commerce application. Users want to see product prices in their local currency (such as pounds `£`, dollars `$`, euros `€`), so you are currently working on a feature to achieve this.

## Task

Write a function that, given:
- an object representing a product
- an object representing a user, including data about their region and currency

returns a **string** which represents the product's price in the user's regional currency.

For example, given:
```js
let productInfo = {
  name: 'Nintendo Switch',
  starRating: 4.8,
  price: {
    gbp: 279.99,
    usd: 349.99,
    eur: 299.99
  }
}
```

And:
```js
let userInfo = {
  firstName: 'Alice',
  lastName: 'Green',
  region: {
    regionName: 'United Kingdom',
    currencyId: 'gbp',
    currencySymbol: '£'
  }
}
```

Then:
```js
getProductPriceWithCurrency(productInfo, userInfo) // returns '£279.99'  
```