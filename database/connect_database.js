const mongoose = require('mongoose');

const uri = `mongodb+srv://GalePraveen:0yt4zzRfm9vw3SWA@cluster0.kduzxte.mongodb.net/Cluster0?retryWrites=true&w=majority`;

const connectDB = ()=>{
    console.log("connected to database");
    mongoose.set('strictQuery',true);
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;