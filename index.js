const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRoute = require("./routes/productRoute");
const filterRoute=require("./routes/filterRoute");


const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

const dbConfig = require("./config/db.config.js");
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose
  .connect(dbConfig.url, options, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database.", err);
    process.exit();
  });

app.use("/api/product", productRoute);
app.use("/api/search",filterRoute);

app.listen(3005, () => {
  console.log("Running on Port 3005");
});
