import checkoutprocess from "./checkoutprocess.mjs";

const checkout = new checkoutprocess("so-cart", ".orderdetails");
checkout.init();
console.log(checkout);

/**get the submit button and add an event listener to it */
document.querySelector("#submit").addEventListener("click", (e)=> {
    e.preventDefault()
    checkout.checkout()
    console.log(checkout.checkout())
})
