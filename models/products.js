import Display from "./Display.js";

class Products extends Display {
    constructor(parent, products, cart) {
        super(parent, products);
        this.cart = cart;
    }

    showProduct() {
        this.products.forEach(products => this.creatCard(products));
    }

    productInfo(data) {
        const { id, name, price } = data;
        const infoJSX = `
        <div id="product-info">
            <h3>${name}</h3>
            <div>
                <span>$ ${price}</span>
                <button data-id=${id}>+</button>  
            </div>
        </div>
        `;
        return infoJSX;
    }

    handleEvent(){
        const elem = event.target;

        if (elem.tagName === "BUTTON"){
            this.addToCart(elem.dataset.id)
        }
    }

    addToCart(id){
        const product = this.products.find(item => item.id === +id)
        this.cart.products.push(product)
        this.cart.showProduct()
    }
}

export default Products