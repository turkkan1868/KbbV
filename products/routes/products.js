const express = require("express");
const products = require("../models/products");
const router = express.Router();
const Product = require("../models/products");

router.get("/", (req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  const products = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });
  products.save();
  res.json(products);

  res.send("create products");
});

router.put("/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  })
  .then((products)=>{
      res.json(products);
    
  })
  .catch((err)=>{
      res.json(err);
  })
});

router.delete("/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id)
  .then((products)=>{
      res.json(products);
  })
  .catch((err)=>{
      res.json(err);
  })
});

module.exports = router;
