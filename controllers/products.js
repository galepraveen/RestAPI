const { mapReduce } = require('../models/ProductSchema');
const ProductModel = require('../models/ProductSchema');

const Products = async (req, resp)=>{
    const { name, price, company, featured, sort, select } = req.query;
    
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

    // similar to sort, doing the task with select so that user can see the desired properties of each product
    if(select){
        let selectFix = select.split(',').join(" ");
        apiData = apiData.select(selectFix);
    }


    
    // to fetch data from mongodb atlas and view in our page
    // const ProductsData = await ProductModel.find({});

    // to fetch the data based on users interest
    const ProductsData = await apiData;
    // console.log(ProductsData);
    resp.status(200).json(ProductsData);
}

const ProductsTesting = async (req, resp) => {
    console.log(req.query);

    // to divide the number of pages
    page = Number(req.query.page) || 1;

    // to set the limit of products in each page
    limit = Number(req.query.limit) || 1;

    // formula for the page skip
    pageSkip = (page-1)*limit;

    let apiData = ProductModel.find(req.query);
    apiData.skip(pageSkip).limit(limit);


    const productData = await apiData;
    resp.status(200).json(productData);
}

module.exports = {Products, ProductsTesting}; 