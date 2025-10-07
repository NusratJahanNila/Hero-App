import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
            Component: Home
        },
        {
            path:'/apps',
            Component: Apps
        },
        {
            path:'/installation',
            Component: Installation
        }
    ]
  },
]);
export default router;