import React, { useState } from "react";
import { connect } from "react-redux";
import { tranferFunds } from "../../../actions/transactionActions";

interface TransferProps {
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

const Transfer: React.FC<TransferProps> = ({ tranferFunds, auth }) => {
  const [transferStatus, setTransferStatus] = useState(false);
  const initialState = {
    fromUser: auth.user.accountNumber,
    toUser: "",
    amount: "",
    remarks: "Transfer from " + auth.user.name,
  };

  const [values, setValues] = useState(initialState);

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    tranferFunds(values);
    setTransferStatus(true);
  };

  return (
    <div>
      <h1 style={{ marginBottom: 50 }}>Transfer funds</h1>
      <div className="formcontainer">
        {transferStatus === true ? <h1>Transfer Success ✅</h1> : <></>}
        {auth.user.accountBalance === 0 ? (
          <h1>⚠️ You do not have funds to transfer.</h1>
        ) : (
          <form
            className="mt-8 space-y-6"
            action="#"
            name="TransferForm"
            method="POST"
            onSubmit={submitForm}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Account Number
                </label>
                <input
                  id="toUser"
                  name="toUser"
                  type="text"
                  onChange={changeInput}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm"
                  placeholder="Account Number / Email address"
                />
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  Amount
                </label>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  min="1"
                  max={auth.user.accountBalance}
                  autoComplete="amount"
                  onChange={changeInput}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm"
                  placeholder="Amount"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center ml-2 text-sm text-gray-900">
                ⚠️ Warning: This action is non-reversible
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
              >
                Transfer
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: { auth: any }) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { tranferFunds })(Transfer);
