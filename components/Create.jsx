import React from 'react'
import {Navbar} from './Navbar.jsx'
import {Menu} from './Menu.jsx'
import {Footer} from './Footer.jsx'

export const Create = () => {
   
  return (
    <>
      <title> Home </title> 

      <Menu/>
      
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ps ps--active-y "> 
        <Navbar/>
            <div className="container-fluid py-4 mt-4 ">
          <div className='row'>  
            <div className="card col-md-6 ms-41 "  >
                <div className="card-header font-weight-bolder bg-gradient-dark text-white">
                    INGRESAR  ||  PRODUCTOS                   
                </div>
                  <div className="card-body text-center ">
                  <form role="form" className="text-start">
                    <div className='row'>
                        <div className='form-group col-md-6'>
                          <label className="form-label">Nombre</label> 
                            <div className="input-group input-group-outline my-3  ">
                              <input type="text" className="form-control  "   placeholder="Usuario"/>
                            </div>
                        </div>
                        <div className='form-group col-md-6'>
                          <label className="form-label">Precio</label> 
                            <div className="input-group input-group-outline my-3  ">
                              <input type="text" className="form-control" placeholder="$"/>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                      
                    </div>
                  </form>                 
              </div>
              <hr className="dark horizontal my-0"/>
              <div className="card-footer d-flex">             
                 
            </div>
          </div>
          
        </div>
       </div>    
       
      
        <Footer/>
      </main>
         
    </>
  );
};

//   <label className="form-label">Contraseña</label>
// <div className="input-group input-group-outline mb-3">
//   <input type="password" className="form-control"  placeholder="Contraseña"/>
// </div>
// <div className="form-check form-switch d-flex align-items-center mb-3">
//   <input className="form-check-input" type="checkbox" id="rememberMe"  />
//   <label className="form-check-label mb-0 ms-3" >Ver contraseña</label>
// </div>
// <div className="text-center">
//   <button   className="btn bg-gradient-primary w-100 my-4 mb-2">Iniciar sesion</button>
// </div>
// <p className="mt-4 text-sm text-center">                    
//   <a  id="message" className="  text-primary text-gradient font-weight-bold"> </a>
// </p>

