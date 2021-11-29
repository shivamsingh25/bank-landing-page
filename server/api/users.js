const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const validateLoginInput = require("../utils/login");
const validateAccountNumber = require("../utils/transactions");

const User = require("../models/user");
const Transaction = require("../models/transactions");

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Validation
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  // const newUser = new User({
  //   name: "Shivam Singh Rathore",
  //   email: "hello@shivamsr.com",
  //   password: "12345",
  //   accountNumber: Math.floor(1000000000000000 + Math.random() * 9000000000000000), // Generates Random 16 digit account number
  // });
  // // Hash password before saving in database
  // bcrypt.genSalt(10, (err, salt) => {
  //   bcrypt.hash(newUser.password, salt, (err, hash) => {
  //     if (err) throw err;
  //     newUser.password = hash;
  //     newUser
  //       .save()
  //       .then((user) => res.json(user))
  //       .catch((err) => console.log(err));
  //   });
  // });

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      // User not registered/ invalid email - Email not on DB
      return res.status(404).json({ error: "User not found" });
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // Login Success
        const payload = {
          accountNumber: user.accountNumber,
          name: user.name,
          userType: user.userType,
          accountBalance: user.accountBalance,
        };
        jwt.sign(
          payload,
          keys.secret,
          {
            expiresIn: 31556926,
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        // Password Incorrect
        return res
          .status(400)
          .json({ error: "Incorrect Email / Password combination" });
      }
    });
  });
});

// @route POST api/users/transactions
// @desc get transactions of user from account number
// @access Public
router.post("/transactions", (req, res) => {
  const accountNumber = req.body.accountnumber;
  console.log('Transaction Statement requested for A/c No.: '+accountNumber);
  if (accountNumber) {
    // Find user's balance sheet
    Transaction.find({ accountNumber })
      .sort({ _id: -1 })
      .then((transactionStatement) => {
        if (!transactionStatement) {
          // zero account statment
          return res.json({ message: "No transactions to show" });
        } else {
          return res.json({ transactionStatement: transactionStatement });
        }
      });
  } else {
    return res.status(400).json({ error: "Invalid account number" });
  }
});

// @route POST api/users/transfer
// @desc Transfer funds from A to B
// @access Public
router.post("/transfer", (req, res) => {
  const transactionID = Math.floor(100000 + Math.random() * 900000);
  const senderAccountNumber = req.body.fromUser;
  const receiverAccountNumber = req.body.toUser;
  const amount = (req.body.amount);
  const newTransfer = new Transaction({
    transactionID: transactionID,
    type: "transfer",
    amount: req.body.amount,
    fromUser: req.body.fromUser,
    toUser: req.body.toUser,
    remarks: req.body.remarks,
  });

  if (amount) {
    newTransfer
      .save()
      .then(() => {
          User.updateOne(
            { accountNumber: senderAccountNumber },
            { $inc : { accountBalance: -amount } },
            function (err, result) {
              if (err) throw err;
              User.updateOne(
                { accountNumber: receiverAccountNumber },
                { $inc : { accountBalance: amount } },
                function (err, result) {
                  if (err) throw err;
                  res.json({ message: "Transfer Success" });
                }
              );
            }
          );
      })
      .catch((err) => console.log(err));
  } else {
    return res.status(400).json({ error: "An error occured" });
  }
});

module.exports = router;
