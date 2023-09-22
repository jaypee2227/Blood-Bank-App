const express = require("express");
const router = require("./routes/testRoutes");

const app = express();

app.use('/api/v1/test', router)

app.listen( 8080 , ()=>{
    console.log(`Server is Listening to the Port : ${8080}`)
})