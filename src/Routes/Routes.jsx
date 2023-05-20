import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Shared/Error";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import ViewDetails from "../ViewDetails/ViewDetails";
import PrivateRoutes from "./PrivateRoutes";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/Alltoy";
import MyToy from "../Pages/MyToy/MyToy";



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
        path: "viewdetails/:id",
        element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/viewdetail/${params.id}`)
      },
      {
        path: "myToy",
        element: <MyToy></MyToy>
      },
      {
        path: "addToy",
        element: <AddToy></AddToy>
      },
      {
        path: "allToy",
        element: <AllToy></AllToy>
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