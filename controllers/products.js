const { mapReduce } = require('../models/ProductSchema');
const ProductModel = require('../models/ProductSchema');

const Products = async (req, resp)=>{
    const { name, price, company, featured, sort } = req.query;
    
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

    // the data is separated from its original position because for the implementation of the sort function
    let apiData = ProductModel.find(queryObject);

    // since in the user query the sorting is done in terms of ',' , to convert it into mongodb sort function convention, the below work is done
    if(sort){
        let sortFix = sort.replace(',', ' ');
        apiData = apiData.sort(sortFix);
    }
    
    // to fetch data from mongodb atlas and view in our page
    // const ProductsData = await ProductModel.find({});

    // to fetch the data based on users interest
    const ProductsData = await apiData;
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