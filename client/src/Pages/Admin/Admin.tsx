import React, { useEffect, useState } from "react";

import NavSideBar from "../../Components/NavSideBar";

import { adminMenu } from "../../Data/menu";
import { useHistory } from "react-router-dom";

interface AdminProps {}

const Admin: React.FC<AdminProps> = () => {
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
      adminMenu.findIndex(
        (item) => getPath(item.location) === getPath(location.pathname)
      )
    );
  }, [location]);

  function getComponent() {
    const Component = adminMenu[activePath].component!;
    return <Component />;
  }
  return (
    <div>
      <NavSideBar menu={adminMenu} />
      <div className="safespace">{getComponent()}</div>
    </div>
  );
};

export default Admin;
