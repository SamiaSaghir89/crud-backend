import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0 // Default quantity value
    },
    price: {
        type: Number,
        required: true,
        default: 0 // Default price value
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
