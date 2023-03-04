import * as React from "react";
import * as ReactDOM from "react-dom";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    loader: rootLoader,
    children: [
      {
        path: "team",
        element: <Team/>,
        loader: teamLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);

