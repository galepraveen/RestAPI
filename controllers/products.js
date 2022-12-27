const { mapReduce } = require('../models/ProductSchema');
const ProductModel = require('../models/ProductSchema');

const matchRegex = (obj, property)=>{
    if(property){
        obj.property = { $regex: property, $options: 'i'};
    }
}

const Products = async (req, resp)=>{
    const { name, price, company, featured } = req.query;
    
    const queryObject = {};

    // to show the results of products even if incomplete name is provided
    if(name){
        queryObject.name = { $regex: name, $options: 'i'};
    }
    if(company){
        queryObject.company = { $regex: company, $options: 'i'};
    }
    if(featured){
        queryObject.featured = { $regex: featured, $options: 'i'};
    }

    

    // to fetch data from mongodb atlas and view in our page
    // const ProductsData = await ProductModel.find({});

    // to fetch the data based on users interest
    const ProductsData = await ProductModel.find(queryObject);
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