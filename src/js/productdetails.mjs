    /**import the localstorage methods needed */
    import {getLocalStorage,setLocalStorage} from "./utils.mjs";
    
    /**create a function to dynamically populate the content of the tent to the webpage */
    function productDetails(product){
        /** cereat an html template to contain the product infomations to be sent to the client */
        return `<section class="product-detail">
        <h2 class="divider">${product.NameWithoutBrand}</h2>
        <img
          class="divider"
          src="${product.Image}"
          alt="${product.NameWithoutBrand}"
        />
        <p class="product-card__price">$${product.FinalPrice}</p>
        <p class="product__color">${product.Colors[0].ColorName}</p>
        <p class="product__description">
        ${product.DescriptionHtmlSimple}
        </p>
        <div class="product-detail__add">
          <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
        </div></section>`;
    }
    /** a class to contain all the public methods */
    export default class productdetails{
        constructor(productid,datasource){
            this.productid = productid
            this.product = {}
            this.datasource = datasource
        
        }


        async init(){
            /**
             * use the dateSource to get the product details.
             * crate a bind(this) to bind the addProductToCart method to the html structure
             * render the product details to the html structure (renderProductDetails)
             */
            const productinfo = await this.datasource.findProductById(this.productid)
            this.product = productinfo
            console.log(this.product)
            this.renderProductDetails("main")
            document.getElementById("addToCart")
                .addEventListener("click",
                    this.addProductToCart.bind(this)
                )

        }

        /**function to add product to cart */
        addProductToCart(product){
            /**logic to adding product to cart */
            let cartItems = getLocalStorage("so-cart");
            if(!Array.isArray(cartItems)){
                cartItems = [];
            }
            cartItems.push(product);
            setLocalStorage("so-cart",cartItems);
        }

        addToCartHandler(e){
            const product = this.product;
            this.addProductToCart(product)
        }

        renderProductDetails(selector){
            const element = document.querySelector(selector);
            element.insertAdjacentHTML(
                "afterBegin",
            productDetails(this.product)
            );
        }

       
    }