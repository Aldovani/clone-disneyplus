const express = require("express");
require("express-async-errors");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = express();
const routes = require("./routes");
const errorHandle = require("./src/errors/handle");
mongoose.connect(
  "mongodb+srv://aldovani:aldovani@cluster0.2hmzw.mongodb.net/disneyplus?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);
app.use(errorHandle);

app.listen(8080);
