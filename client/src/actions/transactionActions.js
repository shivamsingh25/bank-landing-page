import axios from "axios";
import { GET_ERRORS } from "./types";

// Transfer
export const tranferFunds = (transferData) => (dispatch) => {
  console.log(transferData);
  axios
    .post("http://localhost:5000/api/users/transfer", transferData)
    .then((res) => {
      // -> Update Redux
      console.log("Tranfer event done");
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: "",
      })
    );
};

// get Transactions
export const getTransactions = (accountNumber) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/users/transactions", accountNumber)
    .then((res) => {
      return res.data;
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: "",
      })
    );
};
