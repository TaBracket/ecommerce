import React from "react";
import "./../../styles/components/BasketMenu.css";
import { FaShoppingCart } from "./../../utils/icons/index";
export default function BasketMenu() {
  return (
    <div className="basketMenu">
      <div className="basketMenu--hero">
        <span className="basketMenu_hero--span">
          <FaShoppingCart />
        </span>
      </div>
      <div className="basketMenu--menu"></div>
    </div>
  );
}
