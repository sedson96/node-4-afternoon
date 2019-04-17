const users = require("../models/users");
let id = 1;


let login = (request,response) => {
    let user = users.find(user => request.body.username === user.username && request.body.password === user.password)
    if (user) {
        request.session.user.username = request.body.username;
        response.json(request.session.user)
    } else {
        response.status(500).json({error: "user not found"})
    }
}
let register = (request,response) => {
    let newUser = {
        username: request.body.username,
        password: request.body.password,
        id: id
    }
    id++
    users.push(newUser)
    request.session.user.username = request.body.username
    response.json(request.session.user)
}
let signout = (request,response) => {
    request.session.destroy()
    response.json(request.session)
}
let getUser = (request,response) => {
    response.json(request.session.user)
}


module.exports = {
    login,
    register,
    signout,
    getUser
}