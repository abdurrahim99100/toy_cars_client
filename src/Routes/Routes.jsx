import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Shared/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Blog from "../Pages/Blog/Blog";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

export default router;