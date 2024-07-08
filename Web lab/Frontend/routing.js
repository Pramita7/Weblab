import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Create from "./Component/Create";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Update from "./Component/Update";
import Read from "./Component/Read";

const customRouter = createBrowserRouter([
    {
    path: "/",
    element : <App/>,
    children: [
        {
          path: "/Create",
          element: <Create />,
        },
        {
            path: "/Home",
            element: <Home />,
          },
          {
            path: "/Read",
            element: <Read/>,
          },
          {
            path: "/Update",
            element: <Update/>,
          },

      ],


    }
])
export default customRouter;
