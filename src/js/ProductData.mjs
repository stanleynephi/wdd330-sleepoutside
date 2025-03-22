/**pull request from api */
const baseurl = import.meta.env.VITE_SERVER_URL

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {

  async getData(category) {
    /**use the fetch and async method to pull make api requests */
    const response = await fetch(`${baseurl}products/search/${category}`);
    const data = await convertToJson(response);
    console.log(data.Result)
    return data.Result
  }
  async findProductById(id) {
    const products = await fetch(`${baseurl}product/${id}`)
    const response = await convertToJson(products)
    console.log(response)
    return response.Result
  }
}
