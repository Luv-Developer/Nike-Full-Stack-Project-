const express = require("express")
const app = express()
const PORT = 3000
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const path = require("path")
const connection = require("./config/connection")
const usermodel = require("./models/user")
app.use(express.json())
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.get("/",(req,res)=>{
    res.render("homepage")
})
app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})