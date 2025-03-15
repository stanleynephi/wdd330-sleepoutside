import ProductData from "./ProductData.mjs";
import productList from "./ProductList";

const dataSource = new ProductData("tents");
const productListElement = document.querySelector("#product-list");
const productList = new productList("tents", dataSource, productListElement);
productList.init();

import "/css/style.css";
