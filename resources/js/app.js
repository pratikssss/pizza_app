// client side code i.e. to add pizzas to the cart
import axios from 'axios';    //  used to send data to server
import Noty from 'noty';
let addtocart = document.querySelectorAll('.add-to-cart');
let cartCounter = document.querySelector('#cartCounter');
function updateCart(pizza) {
    axios.post('/update-cart', pizza).then(res => {
        console.log(res);
        cartCounter.innerHTML = res.data.totalQty;
        new Noty({
            type: 'success',
            timeout: 1000,
            progressBar: false,
            text: "Item added to cart",
        }).show();
    }).catch(err => {
        new Noty({
            type: 'failure',
            timeout: 1000,
            progressBar: false,
            text: "Something went wrong",
        }).show();
    });
}
addtocart.forEach((btn) => {

    btn.addEventListener('click', (e) => {
        let pizza = JSON.parse(btn.dataset.pizza);      // to access data of data attribute (data-pizza...so name was pizza)
        updateCart(pizza);
        console.log(pizza);
    });
});