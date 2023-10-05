import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import About from "../About/About";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";

import SignUp from "../SignUp/SignUp";
import LogIn from "../Login/LogIn";



const Router = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element: <Main />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/service',
          element:<Service />
        },
        {
          path:'/about',
          element:<About />
        },
         {
          path:'/contact',
          element:<Contact />
        },
         {
          path:'/signup',
          element:<SignUp />
        },
         {
          path:'/login',
          element:<LogIn />
        },
       
       
       
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default Router;
