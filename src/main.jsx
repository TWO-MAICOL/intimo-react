import React from 'react'
import ReactDOM from 'react-dom/client'
// ?  MODULOS 
import { Login } from '../components/Login.jsx'
import { Home } from '../components/Home.jsx'
import { Index } from '../components/Index.jsx'
import {Create} from '../components/Create.jsx'
import { Category} from '../components/Category.jsx'
import { Ingredient} from '../components/Ingredients.jsx'

// ROUTES
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// STYLES 
import '../assets/css/nucleo-icons.css'
import '../assets/css/nucleo-svg.css'  
import '../assets/css/material-dashboard.css' 

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
  { 
    path: "/create",
    element: <Create/>,
  },
  { 
    path: "/ingredient",
    element: <Ingredient/>,
  },
  { 
    path: "/category",
    element: <Category/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
);
