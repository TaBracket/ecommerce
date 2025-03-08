import React from "react";
import "./styles/App.css";
import AppRoutes from "./services/routes/AppRoutes";

export default function App() {
  return (
    <div className="app">
      <header className="app--section app--header">
        <div className="app_header--sections">section-1</div>
        <div className="app_header--sections">section-2</div>
        <div className="app_header--sections">section-3</div>
      </header>
      <main className="app--section app--main">
        <AppRoutes />
      </main>
      <footer className="app--section app--footer">footer</footer>
    </div>
  );
}
