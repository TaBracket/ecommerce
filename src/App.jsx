import React from "react";
import "./styles/App.css";
import AppRoutes from "./services/routes/AppRoutes";
import { UserMenu, BasketMenu, NavMenu } from "./components";

export default function App() {
  return (
    <div className="app">
      <header className="app--section app--header">
        <div className="app_header--sections">
          <UserMenu />
          <BasketMenu />
        </div>
        <div className="app_header--sections">
          <NavMenu />
        </div>
        <div className="app_header--sections">section-3</div>
      </header>
      <main className="app--section app--main">
        <AppRoutes />
      </main>
      <footer className="app--section app--footer">footer</footer>
    </div>
  );
}
