import checkoutprocess from "./checkoutprocess.mjs";

const checkout = new checkoutprocess("so-cart",".orderdetails")
checkout.init()
console.log(checkout)