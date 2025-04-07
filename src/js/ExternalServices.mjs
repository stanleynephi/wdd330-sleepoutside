/**pull request from api */
const baseurl = import.meta.env.VITE_SERVER_URL
const checkOutUrl = import.meta.env.VITE_CHECKOUT_URL

async function convertToJson(res) {
  /**refactor code to convert to json before validation*/
  const data = await fetch(res)
  const response = await data.json()
  if(response == 200){
    console.log("200 OK")
    return response.json()
  }
  else{
    // throw new Error("Bad Response", response)
    throw {name: "Bad Response", message: response}
  }
  // if (res.ok) {
  //   console.log("200 OK")
  //   return res.json();
  // } else {
  //   throw new Error("Bad Response");
  // }
}

export default class ExternalService {

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

  async checkout(payload){
    const option ={
      /**from method */
      method: "POST",
      /**headers */
      headers: {
        "Content-Type": "application/json"
      },
      /**body */
      body: JSON.stringify(payload)
    }
    return await fetch(`https://wdd330-backend.onrender.com:3000/checkout`,option).then(convertToJson)
  }
}
