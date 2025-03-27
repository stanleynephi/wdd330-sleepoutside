import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.js";

const dataSource = new ProductData("tents");
const productListElement = document.querySelector("#product-list");
const productListInstance = new ProductList("tents", dataSource, productListElement);
productListInstance.init();

import "/css/style.css";
