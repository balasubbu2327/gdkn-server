require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/customer-routes");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/api", router);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(PORT, () => console.log("App is Running"));
  })
  .catch((err) => console.log(err));
