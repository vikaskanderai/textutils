import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-black text-white ">
      <Navbar />
      {/* THE PAGES ARE RENDERED HERE */}
      <div className="mt-[6rem] ">
        <Outlet />
      </div>

    </div>
  );
}