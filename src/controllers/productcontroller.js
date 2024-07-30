const Product = require('../models/productmodel');

const createProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  const product = new Product({ name, description, price, stock });
  await product.save();
  res.status(201).json(product);
};

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const product = await Product.findByIdAndUpdate(id, updates, { new: true });
  res.status(200).json(product);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.status(204).send();
};
module.exports = {
 
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct

};