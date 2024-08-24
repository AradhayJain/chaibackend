const express=require('express')
require('dotenv').config()

const app=express()

const port=4000
let name = "aradhay"

app.get('/',(req,res)=>{
    res.send("hello my name is aradhay")
})
app.get('/login',(req,res)=>{
    res.send(`<h1>hi my name is ${name}`)
})

app.listen(process.env.PORT,()=>{
    console.log(`sample srver listening on ${port}`)

})
