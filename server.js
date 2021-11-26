const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/react-shopping-cart-db', { useNewUrlParser: true });

const Product = mongoose.model('Products', new mongoose.Schema(
  {
    id: { type: String, default: shortid.generate },
    title: String,
    price: Number,
    availableSizes: [String],
    image: String
  }
))
app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body)
  const savedProduct = await newProduct.save();
  res.send(savedProduct)
  
});

app.get('/api/products',async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});
app.delete('/api/products/:id',async (req, res) => {
  const deletedProduct = await Product.findByIdAndRemove(req.params.id);
  res.send(deletedProduct);
})
const port = process.env.PORT || 5000;
app.listen(port,()=>{console.log('server on port :'+port);})