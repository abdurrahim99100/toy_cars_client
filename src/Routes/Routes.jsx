import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Shared/Error";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <h2>welcome to home</h2>
        }
      ]
    },
  ]);

  export default router;