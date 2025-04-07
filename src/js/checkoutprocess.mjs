/**import the datasource that will be needed in this checkout */
import { getLocalStorage} from "./utils.mjs"
import ExternalService from "./ExternalServices.mjs";

/**new instance of external services */
const service = new ExternalService()


/**formdata conversion to json
 */
function formDataToJSON(formElement) {
    const formData = new FormData(formElement),
      convertedJSON = {};

  
    formData.forEach(function (value, key) {
      convertedJSON[key] = value;
    });
    return convertedJSON;
}

/**function to get items from the localstorage and convert it into a simple form for submission */
function packageitems(items){
        /**since cart is already an array we will just have to map our the items in the cart */
        const simplifiedItems = items.map((item) => {
            return {
              id: item.Id,
              price: item.FinalPrice,
              name: item.Name,
              quantity: 1,
            };
          });
          return simplifiedItems;
}

/**create a class for the checkoutprocess with the needed constructors */
export default class checkoutprocess{
    /**a datasource in the constuctor to get the data of that will
     * needed to be used in the checkout process
     */
    constructor(key, parentelement){
        this.parentelement = parentelement
        this.key = key
        this.cart = getLocalStorage(this.key)||[]
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
    async init(){
        this.calculatesubtotal()
        this.calculatetotal()
        this.displayorderderails()
    }

    /** function to calculate the total price of the items in the cart and number of items in the cart */
    calculatesubtotal(){
        /**get the datasource and pass in the needed param */
        let price = []
        let total = this.subtotal

        /**loop through the cart and get the total price */
        /**console.log the cart content */
       
        this.cart.forEach(item => {
            price.push(item.FinalPrice)
            total = price.reduce((sum,price) => sum + price,0)
            return total
        })
        this.subtotal = total
    }

    /**calculate the order total after taxes and shipping */
    calculatetotal(){
        /**calculate the taxes that is needed to be paid and round it to two dp*/
        this.tax = parseInt(this.subtotal * 0.06)
        

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
           
        }

        /**calculate the total order */
        this.total = this.subtotal + this.tax + this.shipping
    }

    /**render the order details to the html */
    displayorderderails(){
        /**template and pass in the needed values to display the order details. */
        const template = 
            `<p class= subtotal>Subtotal: $${this.subtotal}</p>
            <p class= shipping>Shipping: $${this.shipping}</p>
            <p class= tax>Tax: $${this.tax}</p>
            <p class= total>Total: $${this.total}</p>`
        document.querySelector(this.parentelement).innerHTML = template
        return template
        
    }

    /**handle form submission */
    async checkout(){
        // get the form element data by the form name
        const formdetails = document.querySelector("form")
        const order = formDataToJSON(formdetails)
       

        order.orderDate = new Date().toISOString();
        order.orderTotal = this.total;
        order.tax = this.tax;
        order.shipping = this.shipping;
        order.items = packageitems(this.cart);

        try{
            const response = await service.checkout(order);
            const data = response.json()
            console.log(data)
            return response
        }
        catch(err){
            console.log("There is an error in your code",err)
        }
    }

    /**function to go the success page and then also clear ervrything in the localStorage */
    success(){
        window.location.href = "./success.html"
        localStorage.removeItem(this.key)
    }



}