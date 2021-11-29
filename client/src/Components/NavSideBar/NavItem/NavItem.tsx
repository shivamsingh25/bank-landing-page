/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Link,
} from "react-router-dom";

import "../index.css";

interface NavItemProps {
  name: string;
  location: string;
  menuid: number;
  onItemClick: Function;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  name,
  location,
  menuid,
  onItemClick,
  active,
}) => {
  const handleClick = () => {
    onItemClick(menuid);
  };
  return (
    <div>
      <Link
        to={{
          pathname: location,
        }}
        className={active === true ? "active" : "hello"}
        onClick={handleClick}
      >
        {name}
      </Link>
    </div>
  );
};

export default NavItem;
