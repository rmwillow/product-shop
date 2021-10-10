const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoeSchema = new Schema({
    name: String,
    brand: String,
    price: String,
    rating: Number,
    imageLink: String,
    size: String,
    description: String,
    category: String
});

module.exports = Shoe = mongoose.model('Shoe', ShoeSchema);