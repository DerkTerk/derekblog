import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";
import Home from "../Home";
import Page from "../Page";


export const router = createBrowserRouter([
    {
      element: <Page/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "banana",
          element: <><h1>banana</h1></>,
        },
      ]
    },
  
  ],
  {basename: "/derekblog/"});
