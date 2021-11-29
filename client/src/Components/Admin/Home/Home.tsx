import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import "./index.css";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [loadMoneyStock, setLoadMoneyStock] = useState(0);
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/admin/getmoneystock")
      .then((res) => {
        setLoadMoneyStock(res.data.moneyStock);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="greeting">
        <h1>Dashboard</h1>
        <div className="details">
          Bank Capital: <span>₹ {loadMoneyStock}</span> <br />
          <br />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: { auth: any }) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Home);
