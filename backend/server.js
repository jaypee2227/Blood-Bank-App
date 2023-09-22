const express = require("express");
const dontenv = require("dotenv");
const router = require("./routes/testRoutes");

//configure the dotenv file.
dontenv.config();

//below snippet is used to send the PORT Number to method Listen.
const PORT = process.env.PORT || 8080


//below we are Creating the rest Object were we can use all the functions of Express JS library.
const app = express();


//below we are writing code for api.
app.use('/api/v1/test', router);


//below code is used to run the Server using listen method.
app.listen( PORT , ()=>{
    console.log(`Server is Listening to the Port : ${PORT}`)
})