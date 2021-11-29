import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import NavSideBar from "../../Components/NavSideBar";

import { userDashboardMenu } from "../../Data/menu";

interface UserDashboardProps {}

const UserDashboard: React.FC<UserDashboardProps> = () => {
  const history = useHistory();
  const location = history.location;
  const [activePath, setActivePath] = useState(0);

  function getPath(path: string) {
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
    return path;
  }

  useEffect(() => {
    setActivePath(
      userDashboardMenu.findIndex(
        (item) => getPath(item.location) === getPath(location.pathname)
      )
    );
  }, [location]);

  function getComponent() {
    const Component = userDashboardMenu[activePath].component!;
    return <Component />;
  }

  return (
    <div>
      <NavSideBar menu={userDashboardMenu} />
      <div className="safespace">{getComponent()}</div>
    </div>
  );
};

export default UserDashboard;
