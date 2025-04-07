import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import {loadheaderfooter,getParam} from "./utils.mjs"

loadheaderfooter()
const category = getParam('category')
const dataSource = new ExternalServices("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

listing.init();