const express = require('express');
const { ProductsTesting } = require('./controllers/products');
const app = express();
const products_routes = require('./routes/products')

const PORT = process.env.PORT || 5000;

// home page
app.get('/', (req, resp) => {
    resp.send('Hello World');
})

app.use('/api', products_routes);

// listening to the request
async function starter(){
    try{
        app.listen(PORT,'localhost',()=>{
            console.log(`connected to port: ${PORT}`);
        });
    }catch(err){
        console.log(err);
    }
}

starter();
