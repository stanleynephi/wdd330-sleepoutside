import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  let cartItems = getLocalStorage("so-cart"); // Get cart items

  if (!Array.isArray(cartItems)) {
    console.error("cartItems is not an array! Resetting.");
    cartItems = [];
  }

  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
}

async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButton = document.getElementById("addToCart");
  if (addToCartButton) {
    addToCartButton.addEventListener("click", addToCartHandler);
  } else {
    console.error("Button with ID 'addToCart' not found.");
  }
});