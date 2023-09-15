import React, { useState } from "react";
import Axios from "axios";

export const Login = ()=> {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [message, setmessage] = useState('');
    

    const handleLogin  = async(e) => { 
      var nodeResponse = document.getElementById('message');
      e.preventDefault();     
      
      await Axios.post('http://localhost:3000/login',{name:user,password:pass})
       .then((res)=>{      
          nodeResponse.classList.remove('invisible');          
          setmessage(res.data);
          // TIME OF MESSAGE
          setTimeout(()=>{
            nodeResponse.classList.add('invisible');
          },2000)

       })   
       .catch((err)=>{console.log(err)})
       
    }
    return (
    <>  
    <title> Login </title>
    <main className="main-content  mt-0">
    <div className="page-header align-items-start min-vh-100" style={{backgroundImage:'url(/img/wallpaper.jpeg)'}}>
      <span className="mask bg-gradient-dark opacity-6"></span>
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-12 mx-auto mt-4">
            <div className="card z-index-0 fadeIn3 fadeInBottom">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-secondary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Inicia Sesion</h4>
                  <div className="row mt-3">
                    <div className="col-2 text-center ms-auto">
                      <a className="btn btn-link px-3"  >
                        <i className="fa fa-facebook text-white text-lg"></i>
                      </a>
                    </div>
                    <div className="col-2 text-center px-1">
                      <a className="btn btn-link px-3"  >
                        <i className="fa fa-github text-white text-lg"></i>
                      </a>
                    </div>
                    <div className="col-2 text-center me-auto">
                      <a className="btn btn-link px-3"  >
                        <i className="fa fa-google text-white text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form role="form" className="text-start">
                    <label className="form-label">Usuario</label> 
                  <div className="input-group input-group-outline my-3">
                    <input type="text" className="form-control" onChange={(e)=>{setUser(e.target.value)}} placeholder="Usuario"/>
                  </div>
                    <label className="form-label">Contraseña</label>
                  <div className="input-group input-group-outline mb-3">
                    <input type="password" className="form-control" onChange={(e)=>{setPass(e.target.value)}} placeholder="Contraseña"/>
                  </div>
                  <div className="form-check form-switch d-flex align-items-center mb-3">
                    <input className="form-check-input" type="checkbox" id="rememberMe"  />
                    <label className="form-check-label mb-0 ms-3" >Ver contraseña</label>
                  </div>
                  <div className="text-center">
                    <button onClick={handleLogin} className="btn bg-gradient-primary w-100 my-4 mb-2">Iniciar sesion</button>
                  </div>
                  <p className="mt-4 text-sm text-center">                    
                    <a  id="message" className="  text-primary text-gradient font-weight-bold"> { message } </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
    </main>

    </>
  )
}
