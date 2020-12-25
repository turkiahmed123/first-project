const express = require("express");
const connectdb = require("./config/dbConnect");
const app = express();
require("dotenv").config();

//connect db
connectdb();

//routes
app.use(express.json());
app.use("/user", require("./routes/user"));

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on ${PORT}`)
);
