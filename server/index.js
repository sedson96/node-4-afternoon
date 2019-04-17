require("dotenv").config();
const express = require("express");
const session = require("express-session");
const { checkUser } = require("./middlewares/checkForSession")
const { readProducts } = require("./controllers/swagController")
const { login,register,signout,getUser } = require("./controllers/authController")
const { add,remove,checkout} = require("./controllers/cartController")
const { search } = require("./controllers/searchController")
let app = express();
let {SESSION_SECRET, SERVER_PORT} = process.env;

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
}))
app.use(checkUser)
app.use(express.static(`${__dirname}/../build`));


app.get("/api/swag", readProducts)
app.get("/api/search", search)

app.get("/api/user", getUser)
app.post("/api/signout", signout)
app.post("/api/register", register)
app.post("/api/login", login)

app.post("/api/cart/checkout", checkout)
app.post("/api/cart/:id", add)
app.delete("/api/cart/:id", remove)


app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))