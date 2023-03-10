// to save the json data in mongodb atlas

const connectDB = require("./database/connect_database");
const productModel = require('./models/ProductSchema');
const productJson = require('./products.json');
require('dotenv').config();

const starter = async ()=>{
    try{
        await connectDB(process.env.MONGODB_URL);

        // to avoid the duplication of data in mongodb atlas
        await productModel.deleteMany();
        
        await productModel.create(productJson);
        console.log("connected");
    }catch(ex){
        console.log(ex);
    }
}

starter();