import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './All Components/Root/Root.jsx';
import Home from './All Components/Root/Home/Home.jsx';
import About from './All Components/Root/Navbar/About/About.jsx';
import Login from './All Components/Root/Authinction/Login/Login.jsx';
import Signup from './All Components/Root/Authinction/Signup/Signup.jsx';
import Authinction from './All Components/Root/Authinction/Authinction.jsx';
import DashBoard from './All Components/Root/DashBoard/DashBoard.jsx';
import ContactUs from './All Components/Root/Navbar/ContactUs/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>

      },
      {
        path: "/about",
        element: <About></About>

      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>

      },
      {
        path: "/login",
        element: <Login></Login>

      },
      {
        path: "/signup",
        element: <Signup></Signup>

      },

    ]
   

  },
  // DashBoard//
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children:[

    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authinction>
      <RouterProvider router={router} />
    </Authinction>
  </React.StrictMode>,
)
