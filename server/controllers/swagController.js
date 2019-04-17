const swag = require("../models/swag")

let readProducts = (request,response,next) => {
    response.json(swag)
}



module.exports = {
    readProducts
}