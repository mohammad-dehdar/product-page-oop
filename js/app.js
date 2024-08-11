import Cart from "../models/Cart.js";
import Products from "../models/products.js";
import { fetchData } from "../utils/httpReq.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document
.getElementById("total-price")
document.querySelectorAll("span");

async function render() {
    const productsData = await fetchData();

    const cartInstance = new Cart(cartListNode, totalPriceNode)
    const productsIntace = new Products(
        productsNode, 
        productsData, 
        cartInstance
    );
    productsIntace.showProduct();
}

document.addEventListener("DOMContentLoaded", render);


