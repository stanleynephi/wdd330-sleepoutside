import ProductData from "./product.js";
import { getParam } from "./utils.mjs";

const dataSource = new ProductData();
const productId = getParam("id");

async function loadProductDetails() {
  const product = await dataSource.findProductById(productId);

  if (!product) {
    document.querySelector(".product-detail").innerHTML =
      "<p>Product not found.</p>";
    return;
  }

  document.querySelector("#product-name").textContent = product.Name;
  document.querySelector("#product-price").textContent =
    `$${product.FinalPrice}`;
  document.querySelector("#product-image").src = product.PrimaryLarge;
  document.querySelector("#product-image").alt = product.Name;

  document.title = `Product: ${product.Name}`; // ✅ Update page title dynamically
}

loadProductDetails();
