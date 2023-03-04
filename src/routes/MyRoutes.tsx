import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";
import Home from "../Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/banana",
    element: <><p>banana</p></>,
  },
]);
