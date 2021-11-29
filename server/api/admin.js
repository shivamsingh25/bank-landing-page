const express = require("express");
const user = require("../models/user");
const router = express.Router();

const User = require("../models/user");

// @route POST api/admin/users
// @desc get account balance of user from account number
// @access Public
router.post("/users", (req, res) => {
  let userData = [];
  User.find({ userType: "user" }).then((userDetails) => {
    userDetails.forEach((userObject) => {
      userData.push({
        name: userObject.name,
        accountNumber: userObject.accountNumber,
        email: userObject.email,
        accountBalance: userObject.accountBalance,
      });
    });
    return res.json({ userData });
  });
});

// @route POST api/admin/getmoneystock
// @desc get total money in the bank
// @access Public
router.post("/getmoneystock", (req, res) => {
  let moneyStock = 0;
  User.find({ userType: "user" }).then((userDetails) => {
    userDetails.forEach((userObject) => {
      moneyStock += userObject.accountBalance;
    });
    return res.json({ moneyStock: moneyStock });
  });
});

module.exports = router;
