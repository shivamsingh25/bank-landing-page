import React, { useState } from "react";
import { connect } from "react-redux";
import { tranferFunds } from "../../../actions/transactionActions";

interface CreditDebitProps {
  tranferFunds: Function;
  auth: {
    isAuthenticated: Boolean;
    user: {
      name: string;
      accountNumber: number;
      userType: string;
      accountBalance: number;
    };
  };
}

const CreditDebit: React.FC<CreditDebitProps> = ({ tranferFunds, auth }) => {
  const [transferStatus, setTransferStatus] = useState(false);
  const initialState = {
    fromUser: auth.user.accountNumber,
    toUser: "",
    type: 'debit',
    amount: 0,
    remarks: "Bank Admin transaction",
  };

  const [values, setValues] = useState(initialState);

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const changeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
    if(values.type === 'debit'){
      values.amount = 0 - values.amount; 
    }
    console.log(values.amount);
    
    tranferFunds(values);
    setTransferStatus(true);
  };
  return (
    <div>
      <h1 style={{ marginBottom: 50 }}>Credit / Debit funds</h1>
      {transferStatus === true ? <h1>Transaction Success ✅</h1> : <></>}
      <div className="formcontainer">
        <form
          className="mt-8 space-y-6"
          action="#"
          name="creditdebitform"
          method="POST"
          onSubmit={submitForm}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="account" className="sr-only">
                Account Number
              </label>
              <input
                id="toUser"
                name="toUser"
                type="text"
                onChange={changeInput}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm"
                placeholder="Account Number"
              />
            </div>
            <div>
              <label className="block text-left">
                <select
                  onChange={changeSelect}
                  name="type"
                  id="type"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm"
                >
                  <option disabled>Type</option>
                  <option value="debit">Debit / Withdraw</option>
                  <option value="credit">Credit / Deposit</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="name" className="sr-only">
                Amount
              </label>
              <input
                id="amount"
                name="amount"
                type="number"
                onChange={changeInput}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm"
                placeholder="Amount"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
            >
              Initiate Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { auth: any }) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { tranferFunds })(CreditDebit);
