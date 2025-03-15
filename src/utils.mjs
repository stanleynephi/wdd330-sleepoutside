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
  