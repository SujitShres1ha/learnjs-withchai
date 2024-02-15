function getReducedPrice(price, discount) {
  let discountedPrice = price-((discount/100)*price)
  console.log(discountedPrice)
  return Math.round(discountedPrice*100)/100
}
console.log(getReducedPrice(20,21))