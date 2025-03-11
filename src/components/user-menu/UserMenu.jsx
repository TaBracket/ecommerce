import React from "react";
import "./../../styles/components/UserMenu.css";
import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";

export default function UserMenu() {
  return (
    <div className="userMenu">
      <div className="userMenu--hero">
        <span>
          <FaUser />
        </span>
      </div>
    </div>
  );
}
