const baseURL = import.meta.env.VITE_SERVER_URL

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  // constructor(category)
  constructor() {
    // this.category = category;
    // this.path = `../json/${this.category}.json`;
  }
  async getData() {
    // return fetch(this.path)
    //   .then(convertToJson)
    //   .then((data) => data);
    const response = await fetch(`${baseURL}products/search/${this.category} `);
    const data = await convertToJson(response);
    return data.Result;
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}