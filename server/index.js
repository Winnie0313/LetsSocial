const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// loads environment variables from a .env file into process.env
require("dotenv").config();

// enable Cross-Origin Resource Sharing
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
})
.then(() => {
  console.log("DB Connection Successfull");
})
.catch((err) => {
  console.log(err.message);
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server Started on Port ${process.env.PORT}`);
});


