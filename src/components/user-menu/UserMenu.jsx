import React from "react";
import "./../../styles/components/UserMenu.css";
import {
  FaUser,
  IoMdArrowDropup,
  IoMdArrowDropdown,
} from "./../../utils/icons/index";
export default function UserMenu() {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div className="userMenu">
      <button className="userMenu--hero">
        <span className="userMenu_hero--span">
          <FaUser />
        </span>
        <span className="userMenu_hero--span">
          {openMenu ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </span>
      </button>
      <ul className="userMenu--menu"></ul>
    </div>
  );
}
