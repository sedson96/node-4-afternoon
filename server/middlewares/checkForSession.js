let checkUser = (request,response,next) => {
    if (!request.session.user) {
        request.session.user = {
            username: "",
            cart: [],
            total: 0
        }
    } next()
}


module.exports = {
    checkUser
}