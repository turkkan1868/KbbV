const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productsRouter = require("./routes/products");
require('dotenv/config');
const bodyParser = require('body-parser');
// const cors = require("cors");


// app.use(cors());

app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("connect succesful");
  })
  .catch(() => {
    console.log("no connect !");
  });

// app.use((req,res,next) => {
//     if(!logged) {
//         res.send('giriş yapılmadı agga')
//     }else {
//         next(0);
//     }

// })

app.use("/products", productsRouter);

const logged = true;

app.listen(5000, () => {
  console.log("Server Aktif");
});

const products = [
    { id: "string", title: "string", desciption: "string", prices: "number" },
  ];
