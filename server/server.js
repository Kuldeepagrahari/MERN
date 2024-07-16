/* The code `import express from "express"` is importing the Express framework into the JavaScript
file. Express is a popular Node.js web application framework that provides a set of features for
building web applications and APIs. */
import express from "express"
/* `const app = express()` is creating an instance of the Express framework, which will be used to set
up and configure the web application. This instance `app` will be used to define routes, middleware,
and other functionalities provided by Express to handle incoming HTTP requests and send responses
back to clients. */
const app = express()
const PORT = 5000 

//using router instead of directly defining the req/ routes in the server.js, to make server.js clean we are doing this
import routers from "./routers/auth-routers.js"
// app.use(routers)

// we can also define the path / loc where we want to mount our routers into main express app
app.use("/api/auth" , routers)
// -------------------------------------------------------------------------------------------------

// app.get("/", (req, res) =>{
//     res.status(200).send("Welcome Sam")
// })

// app.get("/login", (req, res) => {
//     res.status(200).send("you have successfully loggin")
// })

/* The code `app.listen(PORT, () => { console.log(`server is running at  port`) })` is setting
up the Express application to listen on a specific port for incoming HTTP requests. */
app.listen(PORT, () => {
    console.log(`server is running at ${PORT} port`)
})

