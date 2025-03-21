/**creation of a dynamic code for the get cart element */
import { renderlistwithtemplate } from "./utils.mjs"
import { getLocalStorage } from "./utils.mjs"


/**function to create a cartelement template for the element */
function cartlement(element){
    return`
        <li class = "cart-element">
            <section>
                <img 
                    src="${element.Image}"
                    alt="${element.Name}"
                />
                <div class="element-details">
                    <h3 class="card__brand">${element.Brand.Name}</h3>
                    <h2 class="card__name">${element.Name}</h2>
                    <p class="product-card__price">$${element.FinalPrice}</p></a>
                </div>
            </section>
        </li>
    `
}

/** function to get data from the local storage */
export function getcart(key){
    let cart = getLocalStorage(key)
    return cart
}


export default class shopping{
    constructor(datasource,container){
        this.datasource = datasource,
        this.container = container
    }
  
    async init(){
      const cart = await this.datasource
      console.log(cart)
      this.rendercontent(cart)
    }

    rendercontent(cart){
        renderlistwithtemplate(cartlement,this.container,cart)
    }
}