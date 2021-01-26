const mongoose = require('mongoose');
const db = require('./index.js');

const ItemSchema = new mongoose.Schema({
  name: String,
  styles: [{
    styleName: String,
    color: String,
    price: Number,
    size: String,
    stock: Number,
    abbreviation: String,
    styleNo: Number,
    url: String,
  }],
});

const BagSchema = new mongoose.Schema({
  bag: [{
    styleName: String,
    size: String,
  }],
});

const Items = mongoose.model('Items', ItemSchema);
const Bag = mongoose.model('Bag', BagSchema);

module.exports = {
  Items, Bag,
};
