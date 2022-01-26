const express = require("express");
require("express-async-errors");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = express();
const routes = require("./routes");
const errorHandle = require("./src/errors/handle");
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true }
);

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandle);

app.listen(8080);
