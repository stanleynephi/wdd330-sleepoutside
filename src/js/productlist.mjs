/**import the renderlistwithtemplate funtion and use it with the renderlist */
import { renderlistwithtemplate } from "./utils.mjs"

/** the use is to generate a list of product cards in HTML from an array
 * create and export a default class
 */
/** function for the card templates that can be used for the card rendering */
function productcard(product){
    return`<li class="product-card">
  <a href="../product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Images.PrimaryMedium}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`
}

export default class productlist{
    constructor(category,datasource,listelement){
        this.category = category
        this.datasource = datasource
        this.listelement = listelement
    }

    /** to get the data from the datasource and then pass it to the code */
    async init(){
        const productlists  = await this.datasource.getData(this.category)
        console.log(productlists)
        document.querySelector(".title").innerHTML = this.category
        this.renderlist(productlists)
    }

    /**function to render the list of products */
    renderlist(productlists){
        renderlistwithtemplate(productcard,this.listelement,productlists)
    }

}