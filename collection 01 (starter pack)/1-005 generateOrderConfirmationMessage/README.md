# `generateOrderConfirmationMessage`

## Scenario

You are working on an online shopping website. When users place an order on your site, they receive an automated order confirmation email.

The confirmation email should be in this format:

```
Thank you for your order of [PRODUCT NAME]. We aim to deliver within [DELIVERY WINDOW] working days.
```

The delivery window depends on whether the user has chosen **express delivery**.
- Express delivery: *1-2 working days*
- Normal delivery: *3-5 working days*
## Task

Write a function to generate the order confirmation email message.


```js
generateOrderConfirmationMessage('Nintendo Switch', true)
// returns 'Thank you for your order of Nintendo Switch. We aim to deliver within 1-2 working days.'

generateOrderConfirmationMessage('PS5', false)
// returns 'Thank you for your order of PS5. We aim to deliver within 3-5 working days.'
```
