# `getFormattedDeliveryAddress`

##  Scenario

You are building an app for a food delivery service. Delivery drivers want to see the destination addresses of their deliveries in a simple, readable format. So, you are working on a function to extract the address from the delivery data.

## Task

Write a function that, given an object containing information about a delivery, returns a **string** containing the destination address in the form `[building number] [street name], [city] [postcode]`.

Given:
```js
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
```

Then:
```js
getFormattedDeliveryAddress(deliveryDetails) // returns '123 JavaScript Street, Codetown JV4 SCPT'
```