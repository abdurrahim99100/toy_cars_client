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
import Update from "../Pages/ToyUpdate/Update";



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
        loader: ({ params }) => fetch(`https://toy-cars-server-one.vercel.app/viewdetail/${params.id}`)
      },
      {
        path: "myToy",
        element: <PrivateRoutes><MyToy></MyToy></PrivateRoutes>
      },
      {
        path: "addToy",
        element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
      },
      {
        path: "/update/:id",
        element: <PrivateRoutes><Update></Update></PrivateRoutes>,
        loader: ({params}) => fetch(`https://toy-cars-server-one.vercel.app/update/${params.id}`)
      },
      {
        path: "allToy",
        element: <AllToy></AllToy>,
        loader: () => fetch('https://toy-cars-server-one.vercel.app/get-toy')
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