import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";

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
        },
        {
            path:'/appDetails',
            Component: AppDetails
        }
    ]
  },
]);
export default router;