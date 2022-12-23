const Products = async (req, resp)=>{
    resp.status(200).json({
        id: 1,
        productName: "Lenovo IdeaPad 3",
        type: "Normal"
    })
}

const ProductsTesting = async (req, resp) => {
    resp.status(200).json({
        id: 1,
        productName: "Lenovo IdeaPad 3",
        type: "Testing"
    })
}

module.exports = {Products, ProductsTesting}; 