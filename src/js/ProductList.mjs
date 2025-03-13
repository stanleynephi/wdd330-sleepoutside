// ProductList.mjs
export default class ProductList {
    constructor(products) {
      this.products = products;
    }
  
    // Display products on the webpage
    displayProducts() {
      const productListContainer = document.getElementById("product-list");
  
      // Clear any existing content
      productListContainer.innerHTML = "";
  
      // Loop through products and display them
      this.products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.innerHTML = `
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
        `;
        productListContainer.appendChild(productElement);
      });
    }
  }
  