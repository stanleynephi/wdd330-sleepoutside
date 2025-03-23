import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import {loadheaderfooter,getParam} from "./utils.mjs"

loadheaderfooter()
const category = getParam('category')
const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

listing.init();