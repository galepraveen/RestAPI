const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: [true, "Price must be provided"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 3.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['Apple', 'Samsung', "Dell", 'Mi'],
            message: '${value} is not supported'
        }
    }
});

// it will create a table from the above schema
const model = mongoose.model('Product', productSchema);

module.exports = model;