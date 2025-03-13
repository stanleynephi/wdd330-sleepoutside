import ProductData from "./ProductData.mjs"; 
import ProductList from "./ProductList.mjs";


const dataSource = new ProductData("tents");
const productList = new ProductList("tents");

async function fetchProducts() {
    try {
      const response = await fetch("./products.json"); // Fetch the JSON file
      const products = await response.json(); // Parse the JSON data
      const productList = new ProductList(products); // Create an instance of ProductList
      productList.displayProducts(); // Display products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  
  fetchProducts();