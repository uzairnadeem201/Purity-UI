import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
const router = createBrowserRouter([
    {
    path: "/",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
