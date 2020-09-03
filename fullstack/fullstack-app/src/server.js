const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");
const UserController = require("./controllers/UserController");
const app = express(); //set server for requiring
const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

app.use(cors());
app.use(express.json());

app.use(routes);

//connecting to MongoDB by reading .env file if in dev environment
try {
  mongoose.connect(process.env.MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected successfully");
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT})`);
});
