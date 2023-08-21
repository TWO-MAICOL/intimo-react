import React from 'react'
import ReactDOM from 'react-dom/client'
 
import { Login } from '../components/Login.jsx'
import { Home } from '../components/Home.jsx'
import { Index } from '../components/Index.jsx'
// ROUTES
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
 
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.min.js';


const router = createBrowserRouter([
  { 
    path: "/login",
    element: <Login/> ,
  }, 
  { 
    path: "/home",
    element: <Home/>,
  },
  { 
    path: "/",
    element: <Index/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
);
