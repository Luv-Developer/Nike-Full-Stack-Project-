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
    const {username,email,password}  = req.body
    const user = await usermodel.findOne({email})
    if(user){
        res.redirect("/")
    }
    else{
        let saltround = await bcrypt.genSalt(10)
        let hashedpassword = await bcrypt.hash(password,saltround)
        let user = await usermodel.create({
            username:username,
            email:email,
            password:hashedpassword
        })
        if(user){
            let token = jwt.sign({email},"hehe")
            res.cookie("token",token)
            return res.redirect("/")
        }
        else{
            return res.redirect("/register")
        }
    }
})
app.get("/password",(req,res)=>{
    res.render("password")
})
app.post("/password",async(req,res)=>{
    
})
app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})