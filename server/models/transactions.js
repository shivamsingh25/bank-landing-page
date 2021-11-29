const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Transactions Schema
const TransactionsSchema = new Schema({
  transactionID: {
    type: String,
    required: true
  },
  amount: {
    type: Number, // amount
    required: true,
  },
  fromUser: {
    type: String, // accountNumber
    required: true,
  },
  toUser: { 
    type: String, // accountNumber
    required: true,
  },
  type: { 
    type: String, // transfer, credit, debit
    required: true,
  },
  remarks: { 
    type: String, // Remarks 
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("transactions", TransactionsSchema);