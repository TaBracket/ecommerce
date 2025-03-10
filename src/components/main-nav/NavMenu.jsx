import React from "react";
import "./../../styles/components/NavMenu.css";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaWrench,
  IoMdDocument,
  MdCompare,
  MdOutlineSupportAgent,
  MdMenu,
} from "./../../utils/icons/index";
export default function NavMenu() {
  const navItems = [
    { id: "navItem-1", title: "home", icon: <FaHome />, path: "/" },
    {
      id: "navItem-2",
      title: "compare",
      icon: <MdCompare />,
      path: "/products/compare",
    },
    {
      id: "navItem-3",
      title: "assembling",
      icon: <FaWrench />,
      path: "/assembling",
    },
    { id: "navItem-4", title: "docs", icon: <IoMdDocument />, path: "/docs" },
    {
      id: "navItem-5",
      title: "support",
      icon: <MdOutlineSupportAgent />,
      path: "/support",
    },
  ];
  return (
    <ul className="navMenu">
      <li className="navMenu--menuItem">
        <span>
          <MdMenu />
        </span>
        <span>category</span>
      </li>
      {navItems.map((item) => {
        return (
          <li key={item.id}>
            <Link to={item.path}>
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
