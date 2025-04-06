export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
    if (clear) {
      parentElement.innerHTML = "";
    }
    const htmlStrings = list.map(templateFn);
    parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
  }

  import { renderListWithTemplate } from "./utils.mjs";

  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
  
  export function alertMessage(message, scroll = true) {
    const alert = document.createElement('div');
    alert.classList.add('alert');
    alert.innerHTML = `<p>${message}</p><span class="close">X</span>`;
  
    alert.addEventListener('click', function(e) {
      if (e.target.classList.contains('close')) {
        alert.remove();
      }
    });
  
    const main = document.querySelector('main');
    main.prepend(alert);
    if (scroll) window.scrollTo(0, 0);
  }
  