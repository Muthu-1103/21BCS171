const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    "productName":String,
    "Price":Number,
    "Rating":Number,
    "Discount":Number,
    "Availability":String
})
module.exports=mongoose.model("Product",productSchema)