import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Topbar from "./screens/global/Topbar";
// import Dashboard from "./screens/dashboard/dashboard";
import "./App.css";
import SidebarPage from "./screens/global/Sidebar";

import LanguageManagement from "./screens/List/LanguageManagement";
import EventManagement from "./screens/List/EventManagement";
import QuestionManagement from "./screens/List/QuestionManagement";
import AdminManagement from "./screens/List/AdminManagement";

function App(props) {
  const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => {
  //   setIsOpen(true);
  // };

  return (
    <div className="App" style={{ alignItems: "center" }}>
      <div style={{ width: isOpen ? "300px" : "50px" }} className="container">
        <SidebarPage toggle={props.toggle} />

        <main className="content">
          <Topbar />
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/" element={<LanguageManagement />} />
            <Route path="/eventmanagement" element={<EventManagement />} />
            <Route
              path="/questionmanagement"
              element={<QuestionManagement />}
            />
            <Route path="/adminmanagement" element={<AdminManagement />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
