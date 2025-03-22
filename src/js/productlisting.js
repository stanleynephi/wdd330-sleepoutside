/**function to render the elements of the list */
import ProductData from "./ProductData.mjs";
import productlist from "./productlist.mjs";
import loadheaderfooter from "./utils.mjs";
import { getParams } from "./utils.mjs";


loadheaderfooter()
const category = getParams("category")
const productdata = new ProductData()
const listelement = document.querySelector(".product-list")
const productlists = new productlist(category,productdata,listelement)
productlists.init()
