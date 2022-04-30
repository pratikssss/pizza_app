// logic inside routes  will be written here
function cartController() {
    return {
        index(req, res) {
            res.render('customers/cart');
        },
        update(req, res) {
            if (!req.session.cart) {   // if sessions doesnt have any thing like cart then 
                req.session.cart = {
                    items: {},
                    totalQty: 0,
                    totalPrice: 0,
                }
            }
            let cart = req.session.cart;
            // check if item doesnt exist in cart
            if (!cart.items[req.body._id]) {
                cart.items[req.body._id] = {
                    item: req.body,
                    qty: 1
                }
                cart.totalQty = cart.totalQty + 1;
                cart.totalPrice = cart.totalPrice + req.body.price;
            }
            else {
                cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1;
                cart.totalQty = cart.totalQty + 1;
                cart.totalPrice = cart.totalPrice + req.body.price;
            }

            return res.json({ totalQty: req.session.cart.totalQty });
        }
    }
}

module.exports = cartController;