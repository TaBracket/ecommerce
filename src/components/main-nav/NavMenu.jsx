import React from "react";
import "./../../styles/components/NavMenu.css";
import { Link } from "react-router-dom";
// icons
import { MdOutlineSupportAgent, MdCompare, MdMenu } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";
import { FaWrench, FaHome } from "react-icons/fa";
// icons
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
      <li className="navMenu--item">
        <button>
          <span>
            <MdMenu />
          </span>
          <span>menu</span>
        </button>
      </li>
      {navItems.map((item) => (
        <li key={item.id} className="navMenu--item">
          <Link to={item.path}>
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
