import axios from "axios";
import React, { useEffect, useState } from "react";

interface UsersProps {}

const Users: React.FC<UsersProps> = () => {
  const [loadUsers, setloadUsers] = useState(true);
  const [usersArr, setusersArr] = useState<any[]>([]);
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/admin/users")
      .then((res) => {
        setusersArr(res.data.userData);
        setloadUsers(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {loadUsers === true ? (
        <h1>Loading users...</h1>
      ) : (
        <div>
          <div style={{ marginBottom: 50 }}>
            <h1>Customers</h1>
            <button className="float-right bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Add customer
            </button>
          </div>
          <table className="table-fixed border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="w-1/2 border-collapse border border-gray-300">
                  Name
                </th>
                <th className="w-1/2 border-collapse border border-gray-300">
                  Account Number
                </th>
                <th className="w-1/2 border-collapse border border-gray-300">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody>
              {usersArr.map((userObject) => (
                <tr>
                  <td className="border-collapse border border-gray-300">
                    {userObject.name}
                  </td>
                  <td className="border-collapse border border-gray-300">
                    {userObject.accountNumber}
                  </td>
                  <td className="border-collapse border border-gray-300">
                    ₹ {userObject.accountBalance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;
