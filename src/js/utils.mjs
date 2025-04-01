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
    const product = urlParams.get(params);
    return product;
}



/** function to renderlistwithtemplate */
export function renderlistwithtemplate(templatefunc,parentelement,list,position = "afterbegin",clear = false){
        // /**map each item in the product to the productcard function */
      /**conditonal statement to execute the map function */
     if(list){
      const htmltemplate = list.map(templatefunc)
      if(clear){
          parentelement.innerHTML = ""
      }
      parentelement.insertAdjacentHTML(position,htmltemplate.join(""))
     }
}

/**function to render with template the header and the foooter */
export function renderwithtemplate(templatefunc,parentelement,data,callback){
  /**refactor this code to show the header and the footer element */
  parentelement.insertAdjacentHTML("afterbegin",templatefunc)

  if(callback){
    callback(data)
  }
}

/**function to load the html template for the header and the footer */
async function loadtemplate(path){
  /**calls the html header and footer file */
  const response = await fetch(path);
  const html = await response.text();
  return html;
}

/**load header and footer that can be exported and used to render the header and the footer
 */
export default async function loadheaderfooter(){
  /**load the template */
  const header = await loadtemplate("../partials/header.html");
  const footer = await loadtemplate("../partials/footer.html")

  /**call the parent element */
  const headerelement = document.getElementById("header")
  const footerelement = document.getElementById("footer")

  /**render the template into the page */
  renderwithtemplate(header,headerelement)
  renderwithtemplate(footer,footerelement)
}