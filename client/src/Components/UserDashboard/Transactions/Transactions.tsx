import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTransactions } from "../../../actions/transactionActions";
var moment = require("moment");

interface TransactionsProps {
  getTransactions: Function;
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

const Transactions: React.FC<TransactionsProps> = ({
  getTransactions,
  auth,
}) => {
  const [loadingData, setLoadingData] = useState(true);
  const accountnumber = { accountnumber: auth.user.accountNumber };
  const [transactionsArr, setTransactionsArr] = useState<any[]>([]);
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/users/transactions", accountnumber)
      .then((res) => {
        setTransactionsArr(res.data.transactionStatement);
        setLoadingData(false);
        console.log(transactionsArr);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1 style={{ marginBottom: 50 }}>Your transactions</h1>
      {loadingData === null ? (
        <h1>⌛ Loading, Please wait...</h1>
      ) : (
        <table className="table-fixed border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="w-1/2 border-collapse border border-gray-300">
                Date / Time
              </th>
              <th className="w-1/4 border-collapse border border-gray-300">
                Amount
              </th>
              <th className="w-1/4 border-collapse border border-gray-300">
                Remarks
              </th>
              <th className="w-1/4 border-collapse border border-gray-300">
                Transaction ID
              </th>
            </tr>
          </thead>
          <tbody>
            {transactionsArr.map((transactionObject) => (
              <tr>
                <td className="border-collapse border border-gray-300">
                  {moment(transactionObject.timestamp).format(
                    "DD-MM-YYYY HH:mm"
                  )}
                </td>
                <td className="border-collapse border border-gray-300">
                  ₹ {transactionObject.fromUser === auth.user.accountNumber ? 0-transactionObject.amount : transactionObject.amount}
                </td>
                <td className="border-collapse border border-gray-300">
                  {transactionObject.fromUser === auth.user.accountNumber ? 'Transfer to A/c number: '+transactionObject.toUser : transactionObject.remarks}
                </td>
                <td className="border-collapse border border-gray-300">
                  {transactionObject.transactionID}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const mapStateToProps = (state: { auth: any }) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { getTransactions })(Transactions);
