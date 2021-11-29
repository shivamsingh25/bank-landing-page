const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
var cors = require('cors')

const users = require("./api/users");
const admin = require("./api/admin");
const app = express();

// middlewares
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());


// Configs
const db = require("./config/keys").mongoURI;
require("./config/passport")(passport);

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


// Routes
app.use("/api/users", users);
app.use("/api/admin", admin);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));