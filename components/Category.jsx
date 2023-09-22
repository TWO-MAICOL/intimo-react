import React, { useState, useEffect } from 'react';
import {Navbar} from './Navbar.jsx'
import {Menu} from './Menu.jsx'
import {Footer} from './Footer.jsx'
// import css template 
// import '../assets/css/material-dashboard.css' 

export const Category = () => {
   
  return (
    <>
      <title> Categorias</title> 

<Menu/>
  
<main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ps ps--active-y "> 
  <Navbar/>
   ingresar las categoras manito         

  <Footer/>
</main>
   
    
    </>
  );
};
