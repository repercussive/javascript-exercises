function getProductPriceWithCurrency(productInfo, userInfo) {
  let userCurrencyId = userInfo.region?.currencyId
  let userCurrencySymbol = userInfo.region?.currencySymbol
  let regionalPrice = productInfo.price[userCurrencyId ?? 'gbp']

  return `${userCurrencySymbol ?? '£'}${regionalPrice}`
}