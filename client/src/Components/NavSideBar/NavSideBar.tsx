/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";

import "./index.css";
import NavItem from "./NavItem";

interface NavSideBarProps {
  menu: {
    title: string;
    location: string;
    menuid: number;
  }[];
  logoutUser: Function;
  auth: {
    isAuthenticated: Boolean;
  };
}

const NavSideBar: React.FC<NavSideBarProps> = ({ menu, logoutUser, auth }) => {
  const history = useHistory();
  const [activePath, setActivePath] = useState(0);
  const location = history.location;

  const onItemClick = (path: number) => {
    setActivePath(path);
  };

  function changeActiveIndex(newIndex: number) {
    localStorage.setItem("lastActiveIndex", newIndex.toString());
    setActivePath(newIndex);
  }

  function getPath(path: string) {
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
    return path;
  }

  // to remember the state of the active NavSideBar item

  useEffect(() => {
    const activeItem = menu.findIndex(
      (item) => getPath(item.location) === getPath(location.pathname)
    );
    changeActiveIndex(activeItem);
  }, [location, menu]);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div>
      <div className="sidebar">
        <p className="sidebarHeader">ABC Bank</p>
        {menu.map((item) => {
          return (
            <NavItem
              location={item.location}
              name={item.title}
              onItemClick={onItemClick}
              active={item.menuid === activePath}
              menuid={item.menuid}
              key={item.menuid} // removing this shows browser console warning for not having key prop in list
            />
          );
        })}
        <Link
          to={{
            pathname: "/",
          }}
          onClick={handleLogout}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { auth: any; }) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(NavSideBar);
