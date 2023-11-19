const express = require('express');
const app = express()
const port = process.env.PORT || 8000
const path = require('path');
const staticPath = path.join(__dirname, '../public')

app.use(express.static(staticPath))
app.get("/", (req,res)=>{
    res.send("its home page")
})

app.get("/about", (req,res)=>{
    res.send("its about page")
})

app.get("/weather", (req,res)=>{
    res.send("its weather page")
})

app.get("*", (req,res)=>{
    res.send("oops! something went wrong!")
})

app.get("/contact", (req,res)=>{
    res.send("its home page")
})


app.listen(port, ()=>{
    console.log("I am listening to port 8000")
})