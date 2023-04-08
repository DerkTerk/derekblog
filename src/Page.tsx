import React from "react";
import "./App.css";
import MyAppBar from "./MyAppBar/MyAppBar";
import {Outlet} from "react-router-dom";


function Page() {
  return (
    <><MyAppBar/>
      <Outlet/>
    </>
  );
}

export default Page;
