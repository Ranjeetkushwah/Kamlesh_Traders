const express=require("express");
const app=express();
const dotEnv=require('dotenv')
const path=require('path')
const mongoose=require("mongoose");
const cors = require('cors')
// const multer  = require('multer')


// configure cors for taking request for this port
app.use(cors());

// configure of middleware for data secureing and configur eexpress to rechive form data
app.use(express.json())


// app.use(express.multer())


// configure of dotenv 
dotEnv.config({path:'./.env'})

// processing host and port
var localhost= process.env.HOST_NAME || 'localhost'
var port=process.env.PORT || 5001






// middleware function    by digital bazar
const logRequest=(request,response,next)=>{
    console.log(`${new Date().toLocaleString()} Request made to: ${request.originalUrl}`);
    next();  // move to next phase 



}
// applying  middleware to all routes
app.use(logRequest);


// connection mongoose data base ot server
mongoose.connect(process.env.MONGO_DB_LOCAL_URL).then((response)=>{
    console.log("Data base has been succecssfully connected")

}).catch((error)=>{
    console.log('data base is not connected')
    process.exit()

})


// simple request for server to show message
app.get('/',(request,response)=>{
 response.send('server is still workings')
})


// connection of our api  for registraions 
app.use('/api/users',require('./Routers/router'))


// request sever to run  with locl host and port.
app.listen(port,localhost,()=>{
     console.log(`server is working in backend at http://${localhost}:${port}/`)
});