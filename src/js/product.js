// import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { getParam } from "./utils.mjs";
import ProductDetails from "./ProductDetails.mjs";
import loadheaderfooter from "./utils.mjs";

loadheaderfooter()
const productId = getParam('product');
console.log("Returned Param "+productId)
const dataSource = new ExternalServices('tents');

const product = new ProductDetails(productId, dataSource);
product.init();

// add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
