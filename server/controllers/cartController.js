let swag = require("../models/swag");



let add = (request,response) => {
    let index = request.session.user.cart.findIndex(item => item.id === +request.params.id)
    if(index === -1) {
        let selectedProduct = swag.find(product => product.id === +request.params.id)
        
        
        request.session.user.cart.push(selectedProduct)
        request.session.user.total += selectedProduct.price
        response.json(request.session.user)
    }  else { response.json(request.session.user)}
}
let remove = (request,response) => {
    let index = request.session.user.cart.findIndex(product => product.id === +request.params.id)
    if (index !== -1) {
        let selectedProduct = swag.find(product => product.id === +request.params.id)
    
        request.session.user.cart.splice(index,1)
        request.session.user.total -= selectedProduct.price
        response.json(request.session.user)
        } else { response.json(request.session.user)}
}
let checkout = (request,response) => {
    request.session.user.total = 0
    request.session.user.cart = []
    response.json(request.session.user)
}


module.exports = { 
    add,
    remove,
    checkout
}