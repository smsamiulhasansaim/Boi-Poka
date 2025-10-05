import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";

import { Children, Component } from "react";
import Home from "../Pages/Home/Home";

 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root
  },
   
]);