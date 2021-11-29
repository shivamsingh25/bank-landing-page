import React from "react";
import { connect } from "react-redux";

import "./index.css";

interface HomeProps {
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

const Home: React.FC<HomeProps> = ({ auth }) => {
  return (
    <div className="greeting">
      <h1>
        Hello {auth.user.name},
        <br />
        Welcome to ABC Bank,
      </h1>
      <div className="details">
        Account number: <span>{auth.user.accountNumber}</span> <br />
        <br />
        Current account balance: <span>₹ {auth.user.accountBalance}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { auth: any; }) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Home);
