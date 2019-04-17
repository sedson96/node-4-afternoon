const swag = require("../models/swag");

let search = (request,response) => {
    if (request.query.category) {
        let filtered = swag.filter(product => product.category === request.query.category)
        response.json(filtered)
    } else {
        response.json(swag)
    }
}

module.exports = {
    search
}