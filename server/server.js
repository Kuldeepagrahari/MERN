/* The code `import express from "express"` is importing the Express framework into the JavaScript
file. Express is a popular Node.js web application framework that provides a set of features for
building web applications and APIs. */
import express from "express"
import cors from "cors"

/* `const app = express()` is creating an instance of the Express framework, which will be used to set
up and configure the web application. This instance `app` will be used to define routes, middleware,
and other functionalities provided by Express to handle incoming HTTP requests and send responses
back to clients. */
const app = express()
const PORT = 5000 
//bhai pehle frontend ko access to de backend ka tab to data ayega aur tu json me handle karega
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials:true
}))
//bhai json me lenden ho
app.use(express.json())
//using router instead of directly defining the req/ routes in the server.js, to make server.js clean we are doing this
import routers from "./routers/auth-routers.js"
import router from "./routers/contact-route.js"
import SerRouter from "./routers/service-route.js"
import projRouter from "./routers/projects-route.js"
import adminRouter from "./routers/admin-route.js"
// app.use(routers)

// we can also define the path / loc where we want to mount our routers into main express app
app.use("/api/auth" , routers)
app.use(router)
app.use("/api", SerRouter)
app.use("/api",projRouter)
app.use("/api/admin", adminRouter)
// -------------------------------------------------------------------------------------------------

// app.get("/", (req, res) =>{
//     res.status(200).send("Welcome Sam")
// })

// app.get("/login", (req, res) => {
//     res.status(200).send("you have successfully loggin")
// })

/* The code `app.listen(PORT, () => { console.log(`server is running at  port`) })` is setting
up the Express application to listen on a specific port for incoming HTTP requests. */
// socha appp ko batadu ki mai error middleware use kr raha hu to dhyan rakhe
import errMiddleware from "./middlewares/error-middleware.js"
app.use(errMiddleware)

import connectDb from "./utils/db.js"

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at ${PORT} port`)
    })
})


