import React from "react";
import { Outlet } from "react-router-dom";
import "./../styles/layouts/HomeLayout.css";
export default function HomeLayout() {
  return (
    <div className="HomeLayout">
      <Outlet />
    </div>
  );
}
