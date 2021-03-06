const express = require("express");
const mongoose = require("mongoose");
const morgan =require('morgan');

const PORT = process.env.PORT || 3003

const app = express();

app.use(morgan('dev')); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mybadworkouts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
  
});


app.use(require("./routes/apiRoutes"));
app.use(require('./routes/htmlRoute'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});