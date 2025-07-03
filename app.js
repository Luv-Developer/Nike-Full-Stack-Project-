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
app.get("/register",(req,res)=>{
    res.render("register")  
})
app.post("/register",async(req,res)=>{
    
})
app.get("/account",(req,res)=>{
    res.render("account")
})
app.get("/password",(req,res)=>{
    res.render("password")
})
app.post("/password",async(req,res)=>{
    
})
app.get("/help",(req,res)=>{
    res.render("help")
})
app.get("/join",(req,res)=>{
    res.render("join")
})
app.get("/store",(req,res)=>{
    res.render("store")
})
app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})