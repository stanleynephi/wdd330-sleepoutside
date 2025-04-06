// utils.mjs
import { alertMessage } from './utils.mjs';

class CheckoutProcess {
  async checkout() {
    try {
      const order = this.buildOrder(); // build your order
      const result = await this.myServices.checkout(order); // call service

      // Clear cart & redirect
      localStorage.removeItem('so-cart');
      window.location = './checkout/success.html';
    } catch (err) {
      alertMessage(err.message || 'Something went wrong');
    }
  }
}

// Add this in a separate JS file like checkoutProcess.js or cart.js
document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.querySelector('#checkoutSubmit');
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const myForm = document.getElementById('checkoutForm');
      const isValid = myForm.checkValidity();
      myForm.reportValidity();

      if (isValid) {
        myCheckout.checkout(); // make sure this refers to your class instance
      }
    });
  }
});
