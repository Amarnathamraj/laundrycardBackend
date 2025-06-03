// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  pricePerUnit: Number,
  description: String
});

module.exports = mongoose.model('Product', productSchema);
