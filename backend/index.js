const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const app=express()
mongoose.connect('mongodb://localhost:27017/Afford').then(() => {
    console.log("MongoDB is connected")
}).catch((err) => {
    console.log(err)
})
app.use(bodyparser.json())
const taskRouter = require("./routes/productRoute");
app.use("/products", taskRouter);
app.listen(8000, () => {
    console.log("Serving running");
})