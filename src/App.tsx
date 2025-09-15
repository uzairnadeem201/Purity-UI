import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardLayout from "./pages/DashboardLayout";
import Table from "./pages/Table"
import Billing from "./pages/Billing";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import RTL from "./pages/RTL";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
const router = createBrowserRouter([
    {
    path: "/",
    element: <Signup />,
  },
  {
    path: "signin",
    element: <Login />,
  },
  {
    path:"/",
    element:<DashboardLayout/>,
    children:[
      {
    path:"billing",
    element:<Billing/>
  },
  {
    path:"rtl",
    element:<RTL/>
  },
   {
    path:"profile",
    element:<Profile/>
  },{
    path:"table",
    element:<Table/>
  },
  {
    path:"dashboard",
    element:<Dashboard/>
  },
    ]
  },  
 
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
