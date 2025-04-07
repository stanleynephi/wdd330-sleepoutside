import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import loadheaderfooter from "./utils.mjs"

loadheaderfooter()
const dataSource = new ExternalServices("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);

listing.init();