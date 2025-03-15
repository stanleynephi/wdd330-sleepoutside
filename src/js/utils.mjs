// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key,data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}


/**create a function to get the product parameter */
export function getParams(params){
    /** getparameter from the search query */
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get("product");
    return product;
}

/** function to renderlistwithtemplate */
export function renderlistwithtemplate(templatefunc,parentelement,list,position = "afterbegin",clear = false){
        // /**map each item in the product to the productcard function */
        const htmltemplate = list.map(templatefunc)
        this.listElement.insertAdjacentHTML(position,htmltemplate.join(""))
}