/**import the datasource that will be needed in this checkout */
import { getLocalStorage,renderwithtemplate} from "./utils.mjs"



/**template for rendering to contain the total price from the cart*/
function orderdetails(price){
    return `
        <p class="orderdetails_subtotal">Subtotal: $${price.subtotal}</p>
        <p class="orderdetails_shipping">Shipping: $${price.shipping}</p>
    `
}


/**create a class for the checkoutprocess with the needed constructors */
export default class checkoutprocess{
    /**a datasource in the constuctor to get the data of that will
     * needed to be used in the checkout process
     */
    constructor(key, parentelement){
        this.parentelement = parentelement
        this.key = key
        this.cart = getLocalStorage(this.key)
        /**totals for the cart total and the 
         * shipping total
         * tax and the order total
         */
        this.subtotal = 0
        this.shipping = 0
        this.tax = 0
        this.total = 0
    }

    /**initialize the checkout process */
    init(){
        this.calculatesubtotal()
        this.calculatetotal()
        this.displayorderderails()
    }

    /** function to calculate the total price of the items in the cart */
    calculatesubtotal(){
        /**get the datasource and pass in the needed param */
        let price = []
        let total = this.subtotal
        console.log(total)

        /**loop through the cart and get the total price */
        /**console.log the cart content */
        console.log(this.cart)
        this.cart.forEach(item => {
            price.push(item.FinalPrice)
            total = price.reduce((sum,price) => sum + price,0)
            return total
        })
        this.subtotal = total
        console.log("Subtotal",this.subtotal)
    }

    /**calculate the order total after taxes and shipping */
    calculatetotal(){
        /**calculate the taxes that is needed to be paid and round it to two dp*/
        this.tax = parseInt(this.subtotal * 0.06)
        console.log("Tax",this.tax)

        /**calculating the shipping cost */
        let itemcount = this.cart.length
        if(itemcount === 0){
            this.shipping = 0
        }
        else{
        /**charge $10 for the first item and then additional 2 dollars for other items in 
         * the cart.
         */
            this.shipping = 10 + ((itemcount - 1) * 2)
            console.log("shipping fee",this.shipping)
        }

        /**calculate the total order */
        this.total = this.subtotal + this.tax + this.shipping
        console.log("Total",this.total)
    }

    /**render the order details to the html */
    displayorderderails(){
        /**template and pass in the needed values to display the order details. */
        const template = 
            `<p class= subtotal>Subtotal: $${this.subtotal}</p>
            <p class= shipping>Shipping: $${this.shipping}</p>
            <p class= tax>Tax: $${this.tax}</p>
            <p class= total>Total: $${this.total}</p>`
        console.log(template)
        document.querySelector(this.parentelement).innerHTML = template
        return template
        
    }

}