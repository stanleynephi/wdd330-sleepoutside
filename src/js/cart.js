// import { getLocalStorage } from "./utils.mjs";
import loadheaderfooter, { getLocalStorage } from "./utils.mjs";
import shopping  from "./shoppingcart.mjs";
import { getcart } from "./shoppingcart.mjs";

loadheaderfooter()
const container = document.querySelector(".product-list")
const key = getcart("so-cart")
const shopclass = new shopping(key,container)
shopclass.init()
console.log(shopclass)




