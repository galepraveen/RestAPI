const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, resp) => {
    resp.send('Hello World');
})


app.listen(PORT,'localhost',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`connected to port ${PORT}`);
    }
});