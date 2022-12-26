const ProductModel = require('../models/ProductSchema');

const Products = async (req, resp)=>{
    // to fetch data from mongodb atlas and view in our page
    // const ProductsData = await ProductModel.find({});

    // to fetch the data based on users interest
    const ProductsData = await ProductModel.find(req.query);
    console.log(ProductsData);
    resp.status(200).json(ProductsData);
}

const ProductsTesting = async (req, resp) => {
    resp.status(200).json({
        id: 1,
        productName: "Lenovo IdeaPad 3",
        type: "Testing"
    })
}

module.exports = {Products, ProductsTesting}; 