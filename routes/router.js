import express from 'express';
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
} from '../Cotroller/productController.js';

const router = express.Router();

// Routes for CRUD operations on products
router.post('/products', createProduct); // Create a new product
router.get('/products', getAllProducts); // Get all products
router.get('/products/:id', getProductById); // Get a single product by ID
router.put('/products/:id', updateProductById); // Update a product by ID
router.delete('/products/:id', deleteProductById); // Delete a product by ID

export default router;
