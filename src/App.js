import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SideBar from "./components/shared/SideBar";

function App() {
  return (
    <div className="bg-[#252836] w-full min-h-screen">
      <SideBar />
    </div>
  );
}

export default App;
