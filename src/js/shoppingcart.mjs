/**creation of a dynamic code for the get cart element */
import { renderlistwithtemplate } from "./utils.mjs"
import { getLocalStorage,setLocalStorage } from "./utils.mjs"


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
            <button class="remove" data-id="${element.Id}">X</button>
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
      this.product = cart
      this.rendercontent(cart)
      this.gettotalprice(cart)
      document.querySelectorAll(".remove").forEach(
        button => button.addEventListener("click",this.removefromcarthandler.bind(this))
      )
    }

    rendercontent(cart){
        if(cart){
            renderlistwithtemplate(cartlement,this.container,cart)
        }
        else{
            this.container.innerHTML = `<a href="/index.html"><p>Cart is empty Please Add Items</p></a> `
        }
    }

    /**get total price of cart items */
    gettotalprice(cart){
        let prices = []
        let total = 0
        
        /**conditional statements to check if the item is in the cart */
        if(cart){
            cart.forEach(item => {
                /**place the prices in a list */
                prices.push(item.FinalPrice)
                total = prices.reduce((sum,prices) => sum+prices,0)
    
                /**condition for sendin result to html */
                if(total > 0){
                    document.querySelector(".cart-total").innerHTML = `$${total}`
                }
            });
        }
    }

    /**function to remove item from the cart when the button is clicked */
    removeitem(id){
        /**get the localstorage */
        let cart = getLocalStorage("so-cart")
        
        /**run a forEach loop on the cart */
        cart.forEach(item => {
            if(item.Id === id.id){
                /**get the index of the item */
                const index = cart.indexOf(item)
                /**remove the item from the cart */
                cart.splice(index,1)
                /**set the localstorage */
                setLocalStorage("so-cart",cart)
                /**reload the page to render it*/
                window.location.reload()
                
            }
        })
                
    }

    removefromcarthandler(e){
        const product = this.product
        /**console log the product id from the data-set */
        console.log(e.target.dataset)
        const id = e.target.dataset
        this.removeitem(id)
    }
}



