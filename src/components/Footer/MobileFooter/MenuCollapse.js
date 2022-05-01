import React, { useState } from "react";
import SubMenu from "./SubMenu";
const Menu = ({ url, name, navLinks = [] }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const isSubMenu = navLinks.length >= 1;
  return (
    <li className="menu-container">
      <div
        className="menu-heading-container"
        onClick={isSubMenu && handleClick}
      >
        <h4>
          <a href={url}>{name}</a>
        </h4>
        {isSubMenu && <span onClick={handleClick}>{open ? "-" : "+"} </span>}
      </div>
      {isSubMenu && open && <SubMenu navLinks={navLinks} />}
    </li>
  );
};

export default Menu;
