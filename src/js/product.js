import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  //get the information from the local stororage and then create an array and add to it
  let cartItems = getLocalStorage("so-cart");

  //create an array for the items in the cart
  /** checking for array and creating array, you will use !Array.isArray(followed by item you wnat to use for the new array initiated) method */
  if (!Array.isArray(cartItems)) {
    cartItems = [];
  }
  //push the cartItems to the cart
  cartItems.push(product);
  //set the local storage to the cartItems
  setLocalStorage("so-cart", cartItems);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
