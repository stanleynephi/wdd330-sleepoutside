/**create a new instance of the productdata class to read the product
 * data from the tent.json file
 */
import ProductData from "./ProductData.mjs"
import productlist from "./productlist.mjs"
import loadheaderfooter from "./utils.mjs"


loadheaderfooter()
const listelement = document.querySelector(".product-list")
const dataSource = new ProductData("tents")
const productlists = new productlist("tents",dataSource,listelement)
console.log(productlists)
productlists.init()