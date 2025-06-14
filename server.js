

const express = require('express');
const dotenv =require('dotenv');
// Loads the environment variables from .env file
dotenv.config();



const mongoose = require('mongoose');
const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require("path");



const app= express();
const port = 3005;


//database connection
// Connect to MongoDB using the connection string in the .env file (MONGODB_URI)
mongoose.connect(process.env.MONGODB_URL);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});





 //parse the form body data -> reterive the data from the form body
// order matters in the middleware)
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method")); 
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));


// Import the Abaya model from models directiry
const Abaya = require("./models/abaya.js");



//=================================
// Require Abort Controller

const abayaCtrl = require('./controllers/abayas');

// use Controller
app.use('/', abayaCtrl)
//=================================

//API / Router
app.get("/", async(req,res)=> {
    res.render("index.ejs");
});






app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
});
