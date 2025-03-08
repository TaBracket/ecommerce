import React from "react";
import { useRoutes } from "react-router-dom";
import { HomeLayout } from "../../layouts";
import { Home } from "../../pages";

export default function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return routes;
}
