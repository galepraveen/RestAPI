const express = require('express');
const app = express();

// requring database
const connectDB = require('./database/connect_database');
// requiring routes
const products_routes = require('./routes/products')

const PORT = process.env.PORT || 5000;

// home page
app.get('/', (req, resp) => {
    resp.send('Hello World');
})

// creating middleware to the routes
app.use('/api', products_routes);

// listening to the request
const starter = async function(){
    try{
        await connectDB();
        app.listen(PORT,'localhost',()=>{
            console.log(`connected to port: ${PORT}`);
        });
    }catch(err){
        console.log(err);
    }
}

starter();
