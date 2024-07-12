const productModel = require("../model/productSchema");
const getProduct=async (req,res)=>{
    const prods= await productModel.find({}).sort({Rating:-1}).limit(10);
    res.json({
        success:true,
        prods
    })
}
const addProduct = async (req, res) => {
    try {
        const result = req.body;
        console.log(result);
        const newProduct = new productModel(result);
        await newProduct.save();
        res.status(200).send("Success")
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
}
module.exports={
    getProduct:getProduct,
    addProduct:addProduct
}