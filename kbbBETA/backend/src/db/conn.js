const mongoose = require("mongoose");

mongoose
  .connect('mongodb://localhost:27017/kbbBeta', {
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
